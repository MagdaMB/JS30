document.addEventListener('DOMContentLoaded', function() {
        // Get your shorts on - this is an array workout!
          // ## Array Cardio Day 1
          // Some data we can work with
    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
          ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 
        'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 
        'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 
        'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 
        'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
        'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 
        'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 
        'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
          // Array.prototype.filter()
          // 1. Filter the list of inventors for those who were born in the 1500's
        
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");
    const btn4 = document.querySelector("#btn4");
    const btn5 = document.querySelector("#btn5");
    const btn6 = document.querySelector("#btn6");
    const btn7 = document.querySelector("#btn7");
    const btn8 = document.querySelector("#btn8");

    let res = document.querySelector("#result");

    btn1.addEventListener('click', function() {
        
        let arrOfAge=[];
        function checkAge(inventors) {
            for(let i=0; i<inventors.length; i++) {
                if((inventors[i].year>=1500) && (inventors[i].year < 1600))
                    arrOfAge.push(inventors[i]);
            }
            return arrOfAge;
            console.log(arrOfAge);
        }
        let wynik = checkAge(inventors);
        console.table(wynik)
        /*
            const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year<1600))
            console.table(fifteen)
        */
    })
          // Array.prototype.map()
          // 2. Give us an array of the inventors' first and last names
        btn2.addEventListener('click', function() {
            function createArr(inventors) {
                let newArr = [];
                for(let i=0; i<inventors.length; i++) {
                    newArr.push(inventors[i].last + " " + inventors[i].first)
                }
                return newArr;
            }

            let wynik = createArr(inventors);
            console.log(wynik)
        })
        /*
        const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
        console.log(fullName);
        */

          // Array.prototype.sort()
          // 3. Sort the inventors by birthdate, oldest to youngest

        btn3.addEventListener('click', function() {
            const birth = inventors.sort(function(a, b) {
                if(a.year > b.year) {
                    return 1;
                } else {
                    return -1;
                }
            });
            console.table(birth);

            /*const birth = inventors.sort((a, b) => a.year > b.year ? 1 : -1);*/
        })

          // Array.prototype.reduce()
          // 4. How many years did all the inventors live?

        btn4.addEventListener('click', function() {
            function sumYear(inventors) {
                let arrAge=[];
                let sumAge=0;
                for(i=0; i<inventors.length; i++) {
                    arrAge.push(inventors[i].passed - inventors[i].year)
                }
                for(y=0; y<arrAge.length; y++) {
                    sumAge += arrAge[y];
                }
                return sumAge;
            }

            let result = sumYear(inventors);
            console.log(result);

            /*
            const totalAge = inventors.reduce((total, inventor) => {
                return total + (inventor.passed - inventor.year);
            }, 0)
            console.log(totalAge); */
        })

        
          // 5. Sort the inventors by years lived
          // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
          // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
          // 7. sort Exercise
          // Sort the people alphabetically by last name
          // 8. Reduce Exercise
          // Sum up the instances of each of these
          const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
})