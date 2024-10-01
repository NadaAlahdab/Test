// let students =([
//  {
//     name:'ahmad',
//     age : 20
//  },
//  {
//     name:'qw',
//     age : 20
//  },
//  {
//     name:'aaa',
//     age : 40
//  },
//  {
//     name:'hhh',
//     age : 40
//  },
//  {
//     name:'ddd',
//     age : 60
//  },
//  {
//     name:'jjj',
//     age : 60
//  },
//  {
//     name:'iii',
//     age : 50
//  },
//  {
//     name:'ppp',
//     age : 50
//  },
// ]);
// function groupStudentAgeRange(array){
    
// }
    
// =====================exerxice one =====================
// function filterAndSquareOddNumber(array){
//     let oddNum = array.filter(num => num %2 == 1);
//     let sq = oddNum.map(num => Math.pow(num ,2));
//     return sq;
// }
// let array = [1,2,3,4,5];
// let fun = filterAndSquareOddNumber(array);
// console.log(fun);     
// =====================exerxice Tow =====================
// function calculatePositiveAverage(array){
//     let filterArray = array.filter(num => num > 0);
//     let lengthArrayPositiveNumber = filterArray.length;
//     let sum = filterArray.reduce((acc ,num) => num + acc ,0);
//     let avg = lengthArrayPositiveNumber > 0 ? sum / lengthArrayPositiveNumber : 0;
//     return avg;
// }
// let array = [1,-2,3,4,5,-7,-9];
// let f = calculatePositiveAverage(array);
// console.log(f); 
// =====================exerxice Three =====================

// function isPalindrome(array){
//     let length = array.length;
//     for(let i = 0 ; i < Math.floor(length / 2) ; i++){
//         if(array[i] != array[length -i -1]){
//             return "false"
//         }

          
//         else{
//             return "true"
//         }
//     }
// }
// let array =[1,2,3,2,1];
// let palindrome = isPalindrome(array);
// console.log(palindrome);


// const car ={
//     make:"Toyota",
//     year:2023,
//     model:"corolla",
//     speed:0,

//  start(){
//     console.log("Car is startede");
// },
//  accelerate(amount){
//    console.log(this.speed += amount) ; 
// },
//  stop(){
//     this.speed = 0;
//     console.log("The car is stoped");
// }
// };
// car.start();
// car.accelerate(50);
// car.stop();




// const book ={
//    title : " ",
//    author : " ",
//    year : 0,
//    isCheckedOut : false,

//    checkedOut(){
//     if(!this.isCheckedOut ){
//         this.isCheckedOut = true
//      console.log(`"${this.title}" has been checked out.`);
//    }
//    else {
//     console.log(`"${this.title}" has been checked out `);
//    }
// },
//     getDetails(){
//        let stutus = this.isCheckedOut ? "Checked Out" : "Available";
//        console.log(`title Is : "${this.title}" Auther : ${this.author} yeasrs : {this.year}`)
//     }
// };
// const myBook = Object.create(book);
// myBook.title = "title one",
// myBook.author = "author one",
// myBook.year = 2020;

// myBook.checkedOut();
// myBook.getDetails();


// const bankAccount ={
//     owner : " ",
//     balance : 0,
//     accountNumber : 0 ,

//     deposit(amount){
//     this.balance += amount,
//     console.log(`The balance is ${this.balance}`); 
//     },
//     withdraw(amount){
//         if(this.balance < amount){
//             console.log(`The balance is not enough The balance : ${this.balance}`)
//         }
//         else{
//             this.balance -=amount;
//             console.log(`The remaining balance after withdrawal ${
//                 this.balance
//             }`)
//         }
//     },
//     getDetails(){
//         console.log(`Ownwe Is: ${this.owner} Balance : ${this.balance} accountNumber Is : ${this.accountNumber}`)
//     },

// }
// const instanceBankAccount = Object.create(bankAccount);
// instanceBankAccount.owner = "Nada",
// instanceBankAccount.balance = 800,
// instanceBankAccount.accountNumber = 123456789

// instanceBankAccount.deposit(500);
// instanceBankAccount.withdraw(200);

// class Movies{
//     constructor(title,director,year,isAvailable){
//         this.title = title,
//         this.director = director,
//         this.year = year,
//         this.isAvailable = true;
//     }
//     rent(){
//         if(this.isAvailable){
//             console.log(`" ${this.title} "the movies is avalible`)
//         }
//         else{
//             console.log(` "${this.title}" the movies cant avalible`);
//         }
//     }
//     returnMovies(){
//         this.isAvailable = true;
//         // console.log('the movies')
//     }
// }


class TicTacToe{
    constructor(){
        this.board = [
            ["_","_","_"],
            ["_","_","_"],
            ["_","_","_"],
        ],
        this.wineer = null,
        this.currentPlayer = "X";
    }

    addPlayer(game, player, line ,column){
        const game = {
             board : [
            ["_","_","_"],
            ["_","_","_"],
            ["_","_","_"],
          ]
        }
        return game;
    }
    getPossibleMove(game){
        for(let i = 0 ; i < this.board.length-1 ; i++){
            for(let j = 0 ; j < this.board.length-1 ; j++ ){
                if(game[i] == "_" ){
                    console.log(`row ${i+1}`)
                    return game[i]
                }
                else if (game[j] == "_"){
                    console.log(`Line ${j+1}`)
                    return game[j];
                }
                else {
                    console.log("The fild Is full ")
                }
            }
        }
    }
    checkWinner() {
        const b = this.board;

        for (let i = 0; i < 3; i++) {
            if (b[i][0] === b[i][1] && b[i][1] === b[i][2] && b[i][0] !== "_") {
                return `Winner is ${b[i][0]}`;
            }
            if (b[0][i] === b[1][i] && b[1][i] === b[2][i] && b[0][i] !== "_") {
                return `Winner is ${b[0][i]}`;
            }
        }

        if (b[0][0] === b[1][1] && b[1][1] === b[2][2] && b[0][0] !== "_") {
            return `Winner is ${b[0][0]}`;
        }
        if (b[0][2] === b[1][1] && b[1][1] === b[2][0] && b[0][2] !== "_") {
            return `Winner is ${b[0][2]}`;
        }
        return null;
    }

//     checkWinner(game){
//       for (let i = 0; i < game.length -1; i++) {
//         for (let j = 0; j < game.length -1; j++) {
//             if(i == j == "X")
//                 return "Winner Is X"
//             else if(i == j == "O")
//                 return "Winner Is O"
//             else if(game[0][0] =='X' && game[0][1] == 'X' && game[0][2] == 'X' ||
//                     game[1][0] =='X' && game[1][1] == 'X' && game[1][2] == 'X' ||
//                     game[2][0] =='X' && game[2][1] == 'X' && game[2][2] == 'X' ||

//                     game[0][0] =='X' && game[1][0] == 'X' && game[2][0] == 'X' ||
//                     game[0][1] =='X' && game[1][1] == 'X' && game[2][1] == 'X' ||
//                     game[0][2] =='X' && game[1][2] == 'X' && game[2][2] == 'X')
//              return "Winner is O"
//             else if(game[0][0] =='O' && game[0][1] == 'O' && game[0][2] == 'O' ||
//                     game[1][0] =='O' && game[1][1] == 'O' && game[1][2] == 'O' ||
//                     game[2][0] =='O' && game[2][1] == 'O' && game[2][2] == 'O' ||

//                     game[0][0] =='O' && game[1][0] == 'O' && game[2][0] == 'O' ||
//                     game[0][1] =='O' && game[1][1] == 'O' && game[2][1] == 'O' ||
//                     game[0][2] =='O' && game[1][2] == 'O' && game[2][2] == 'O')
//              return "Winner is O "
//         } 
//       }
//    }
    // checkEndOfGame(game){
    //    if(this.checkEndOfGame == ) 
    // }

}
const tictactoe = new TicTacToe();
tictactoe.addPlayer(game,"X" , 0 ,0);
tictactoe.checkWinner();
