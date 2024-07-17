document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const form = document.getElementById('date-input');

    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        // Parse the date input
        let day = parseInt(document.getElementById('day').value, 10);
        let month = parseInt(document.getElementById('month').value, 10) - 1; // Months are zero-indexed
        let year = parseInt(document.getElementById('year').value, 10);

        // Validate day, month, and year
        let valid = true;

        let errorDay = document.getElementById('errorDay');
        let errorMonth = document.getElementById('errorMonth');
        let errorYear = document.getElementById('errorYear');

        if (isNaN(day) || day < 1 || day > 31) {
            errorDay.innerHTML = 'This value is not valid';
            valid = false;
        } else {
            errorDay.innerHTML = '';
        }

        if (isNaN(month) || month < 0 || month > 11) {
            errorMonth.innerHTML = 'This value is not valid';
            valid = false;
        } else {
            errorMonth.innerHTML = '';
        }

        if (isNaN(year) || year < 1900 || year > 2024) {
            errorYear.innerHTML = 'This value is not valid';
            valid = false;
        } else {
            errorYear.innerHTML = '';
        }

        if (!valid) {
            return; // Exit if any input is invalid
        }

        // Calculate the age
        let dob = new Date(year, month, day);
        let today = new Date();
        let ageYear = today.getFullYear() - dob.getFullYear();
        let ageMonth = today.getMonth() - dob.getMonth();
        let ageDay = today.getDate() - dob.getDate();

        if (ageDay < 0) {
            ageMonth -= 1;
            ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in previous month
        }

        if (ageMonth < 0) {
            ageYear -= 1;
            ageMonth += 12;
        }

        // Display the results
        document.getElementById('day-dash').innerHTML = ageDay;
        document.getElementById('month-dash').innerHTML = ageMonth;
        document.getElementById('year-dash').innerHTML = ageYear;
    });
});

