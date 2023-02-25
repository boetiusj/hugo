const job_types = ['Exterior', 'Cabinet', 'Interior', 'Commercial', 'Wildcard'];
const row_numbers = [...Array(15).keys()];

const endpoint = "https://sheets.googleapis.com/v4/spreadsheets/1Wo4d7bNVA9CemGYMH4-XaW53SwkE_dkOv13zCrSOcfY/values/Zip%20Filter?&key=AIzaSyA-m6bw9367TTpdjbqO-IHwLveJ6xJpT6M";

let zip_checkup = [];

const user_zip = 64114; // from form field;
const job_type = 'Wildcard'; // from form field;

function checkAvailability(row = []) {
  const index = job_types.indexOf(job_type);
  const start = index * 3;
  const end = (index + 1) * 3;
  const values_range = row_numbers.slice(start, end);
  const zip = values_range[0];
  const city = values_range[1];
  const state = values_range[2];

  zip_checkup = user_zip == row[zip] ?
     [row[zip], row[city], row[state]] : [];
}

function toggleBookForm(parent) {
  zips.values.forEach(row => zip_checkup.length ? false : checkAvailability(row));

  if(zip_checkup.length) {
    // load form iframe
    // populate form iframe with values
    // double check $zip1
    const form =  `
      <div class="show_if_found">
        <iframe style="width: 100%; height: 1000px; border: 0px; background-color: transparent;" src="https://crestwood-calls.youcanbook.me/?noframe=true&skipHeaderFooter=true&CITY=${zip_checkup[1]}&STATE=${zip_checkup[2]}&ZIP=${zip_checkup[0]}&TYPE=${job_type}" width="300" height="150" frameborder="0">
          <span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span>
        </iframe>
      </div>`;
    console.log(form);
  } else {
    // redirect to regret;
  }
}

toggleBookForm();