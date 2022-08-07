const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

function findEmployee() {
  let name = prompt('Enter name')

  for (let key in employees) {
    if (key === name) {
      return alert(`Name: ${key}, salary: ${employees[key].salary}, address: ${employees[key].address.district}, ${employees[key].address.province}`)
    }
  }
  
  return alert('Not Found')
}

findEmployee()