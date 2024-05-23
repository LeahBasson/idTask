
let Submit = document.querySelector('[Submit]');

Submit.addEventListener('click', () => {
    let idNumber = document.querySelector('[idNumber]').value;
    let gender = idNumber.slice(5, 9);
    let condition = (gender < 5000) ? 'Male' : 'Female';

    if (!isNaN(idNumber) && idNumber.length == 13){
    document.querySelector('[dob]').textContent =  (`Date of birth: ${idNumber.slice(0, 6)}`);
    document.querySelector('[ genderDisplay]').textContent = (`Gender: ${condition}`);
    }
    else{
        document.querySelector('[invalid]').textContent = (`Your Id number is invalid`);
    }
})