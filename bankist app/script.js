//Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const containerApp= document.querySelector('.app');
const containerMovement= document.querySelector('.movements');

const displayMovement= function(movements){
	// containerMovement.innerHTML('');
movements.forEach(function(movement,index,array){
	const type= movement>0?'deposit':'withdrawal';
const html=`  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index+1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${movement}€</div>
        </div>`;
        containerMovement.insertAdjacentHTML('afterbegin',html);
})
}

displayMovement(account1.movements);

//computing the usernames
const createUsernames= function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(word=> word.at(0)).join('');
  });
}

createUsernames(accounts);


  const movementss= [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

  const filterDeposits= movementss.filter(function(mov){
    return mov>0;
  })

console.log(filterDeposits);

const withdrawal= movementss.filter(mov=>mov<0);

console.log(withdrawal);