// BUDGET    CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function () {
        if (data.totals.inc) {
            this.percentage = Math.round((this.value / data.totals.inc) * 100);
        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percentage: -1
    };

    var calculateTotal = function (type) {
        var sum = 0;

        data.allItems[type].forEach(function (current, index, array) {
            sum += current.value;
        });
        data.totals[type] = sum;
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length === 0) {
                ID = 0;
            } else {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            this.testing();
            // Return the new element
            return newItem;
        },
        deleteItem: function (type, id) {
            var ids, index;

            ids = data.allItems[type].map(function (current, index, array) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },
        calculateBudget: function () {

            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget : income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }

        },
        calculatePercentages: function () {
            data.allItems.exp.forEach(function (current, index, array) {
                current.calcPercentage();
            });
        },
        getPercentages: function () {
            var percentages = data.allItems.exp.map(function (current, index, array) {
                return current.getPercentage();
            });
            return percentages;
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        testing: function () {
            console.log(data);
        }
    }

})();

// UI    CONTROLLER
var UIController = (function () {

    var DOMStrngs, formatNumber, NodeListForEach;

    DOMStrngs = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        monthLabel: '.budget__title--month'
    };

    formatNumber = function (type, num) {
        // + or - before numbers
        // exactly 2 decimal points
        // comma separating the thousands

        var numSplit;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');
        int = numSplit[0];
        dec = numSplit[1];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        return (type === 'inc' ? '+ ' : '- ') + int + '.' + dec;

    };
    NodeListForEach = function (list, callback) {
        for (let index = 0; index < list.length; index++) {
            callback(list[index], index);
        }
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrngs.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMStrngs.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrngs.inputValue).value)
            }
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMStrngs.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            } else if (type === 'exp') {
                element = DOMStrngs.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            }

            //Replace the placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(type, obj.value));

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        deleteListItem: function (selectorID) {

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },
        clearFields: function () {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMStrngs.inputDescription + ',' + DOMStrngs.inputValue);

            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function (current, index, Array) {
                current.value = '';
            });

            fieldsArray[0].focus();
        },
        displayBudget: function (obj) {

            var budgetType = obj.budget >= 0 ? 'inc' : 'exp';
            console.log(budgetType);
            document.querySelector(DOMStrngs.budgetLabel).textContent = formatNumber(budgetType, obj.budget);

            document.querySelector(DOMStrngs.incomeLabel).textContent = formatNumber('inc', obj.totalInc);

            document.querySelector(DOMStrngs.expensesLabel).textContent = formatNumber('exp', obj.totalExp);

            if (obj.percentage > 0) {
                document.querySelector(DOMStrngs.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrngs.percentageLabel).textContent = '---';
            }

        },
        displayPercentages: function (percentages) {
            var fields;

            fields = document.querySelectorAll(DOMStrngs.expensesPercentageLabel);

            NodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            })

        },
        displayMonth: function () {
            var now, month, year, monthList;

            monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

            now = new Date();

            month = monthList[now.getMonth()];
            year = now.getFullYear();

            document.querySelector(DOMStrngs.monthLabel).textContent = month + ' ' + year;
        },
        changedType: function () {
            var fields;

            fields = document.querySelectorAll(
                DOMStrngs.inputType + ',' +
                DOMStrngs.inputDescription + ',' +
                DOMStrngs.inputValue
            );

            NodeListForEach(fields, function (cur) {
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMStrngs.inputButton).classList.toggle('red');

        },
        getDOMStrings: function () {
            return DOMStrngs;
        }
    }

})();

// GLOBAL    APP    CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UIController.changedType);
    };

    var updateBudget = function () {
        var budget;

        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
        // console.log(budget);
    };

    var updatePercentage = function () {

        // 1. Calculate percentages
        budgetController.calculatePercentages();

        // 2. Read the percentages from the budget controller
        var percentages = budgetController.getPercentages();

        // 3. Update the UI with new percentages
        UICtrl.displayPercentages(percentages);

    }

    var ctrlAddItem = function () {
        var input, newItem;

        // 1.  Get the filled input data
        input = UICtrl.getInput();
        // console.log(input);

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();

            // 6. Calculate and update percentages
            updatePercentage();
        }
    };

    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {

            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);

            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // 3. Update and show the new budget
            updateBudget();

            // 4. Calculate and update percentages
            updatePercentage();

        }

    }

    return {
        init: function () {
            console.log('Application has started');
            UICtrl.displayMonth();
            UICtrl.displayBudget(budgetCtrl.getBudget());
            setupEventListeners();
        }
    };

})(budgetController, UIController);


controller.init();