// var $ = jQuery.noConflict();

// async function getInputValues(c_object, o_name) {
//   let checkboxes = document.getElementsByName(o_name);
//   let result = [];
//   for (var i = 0; i < checkboxes.length; i++) {
//     if (checkboxes[i].checked) {
//       result.push(checkboxes[i].value);
//     }
//   }
//   return result;
// }

var physical = [];
var religion = [];
var hobbies = [];
var personality = [];
var children = [];
var relationship = [];
var lifestyle = [];
var age = [];
//Dropdown Function
async function showDropdown(elementId, radioId) {
  // ;
  var radio = document.getElementById(radioId);
  var name = radio.name;
  let inputCollection = document.querySelectorAll(`input[name='${name}']`);
  let inputArray = Array.from(inputCollection);
  inputArray.forEach((s) => {
    let wrap = s.closest(".checkcontainer");
    wrap.querySelector("select").style.display = "none";
  });

  var dropdown = document.getElementById(elementId);
  dropdown.style.display = radio.checked ? "block" : "none";
}

// Dropdown Value Function
function getInputValues(input) {
  let a = document.querySelector(input);
  if (a !== null && typeof a !== undefined) {
    let container = document.querySelector(input).closest(".checkcontainer");
    let trait = document.querySelector(input).id;
    let preference = container.querySelector("select").value;
    return [trait, preference];
  } else {
    return "";
  }
}
//Physical Attributes
function getPhysicalTraits(e) {
  let checkbox = e.target;
  let multiSelect = checkbox.closest(".multi-select");
  let inputCollection = multiSelect.querySelectorAll(
    'input[type= "checkbox"]:checked'
  );
  let inputFields = Array.from(inputCollection);
  physical = [];
  inputFields.forEach((s) => {
    physical.push(s.id);
  });
}

//Beliefs
function getBeliefs(e) {
  let checkbox = e.target;
  let multiSelect = checkbox.closest(".multi-select");
  let inputCollection = multiSelect.querySelectorAll(
    'input[type= "checkbox"]:checked'
  );
  religion = [];
  let inputFields = Array.from(inputCollection);
  inputFields.forEach((s) => {
    religion.push(s.id);
  });
}
//Hobbies
function getHobbies(e) {
  let checkbox = e.target;
  let multiSelect = checkbox.closest(".multi-select");
  let inputCollection = multiSelect.querySelectorAll(
    'input[type= "checkbox"]:checked'
  );
  hobbies = [];
  let inputFields = Array.from(inputCollection);
  inputFields.forEach((s) => {
    hobbies.push(s.id);
  });
}
//Personalities
function getPersonalities(e) {
  let checkbox = e.target;
  let multiSelect = checkbox.closest(".multi-select");
  let inputCollection = multiSelect.querySelectorAll(
    'input[type= "checkbox"]:checked'
  );
  let inputFields = Array.from(inputCollection);
  personality = [];
  inputFields.forEach((s) => {
    personality.push(s.id);
  });
}
//Children
function getChildren(e) {
  let checkbox = e.target;
  let multiSelect = checkbox.closest(".multi-select");
  let inputCollection = multiSelect.querySelectorAll(
    'input[type= "checkbox"]:checked'
  );
  let inputFields = Array.from(inputCollection);
  children = [];
  inputFields.forEach((s) => {
    children.push(s.id);
  });
}
//Relationship
function getRelationship(e) {
  let checkbox = e.target;
  let multiSelect = checkbox.closest(".multi-select");
  let inputCollection = multiSelect.querySelectorAll(
    'input[type= "checkbox"]:checked'
  );
  let inputFields = Array.from(inputCollection);
  relationship = [];
  inputFields.forEach((s) => {
    relationship.push(s.id);
  });
}
//Lifestyle
function getLifestyle(e) {
  let checkbox = e.target;
  let multiSelect = checkbox.closest(".multi-select");
  let inputCollection = multiSelect.querySelectorAll(
    'input[type= "checkbox"]:checked'
  );
  let inputFields = Array.from(inputCollection);
  lifestyle = [];
  inputFields.forEach((s) => {
    lifestyle.push(s.id);
  });
}
//Age
function getAge(e) {
  let checkbox = e.target;
  let multiSelect = checkbox.closest(".multi-select");
  let inputCollection = multiSelect.querySelectorAll(
    'input[type= "checkbox"]:checked'
  );
  age = [];
  let inputFields = Array.from(inputCollection);
  inputFields.forEach((s) => {
    age.push(s.id);
  });
  // console.log(age);
}
//Multiple Selection Function
// function getCheckboxValues() {
//   debugger;
//   let collection = document.getElementsByClassName("form-box");
//   let array = [];
//   let arr = Array.from(collection);
//   for (i = 2; i < arr.length; i++) {
//     let container = arr[i].querySelector(".multi-select");
//     let trait = {};
//     let inputCollection = container.querySelectorAll("input:checked");
//     let collect = Array.from(inputCollection);
//     for (j = 0; j < collect.length; j++) {
//       trait["key" + (j + 1)] = collect[j].id;
//     }
//     if (Object.keys(trait).length === 0) {
//       continue;
//     } else {
//       array.push(trait);
//     }
//   }
//   return array;
// }

//Submission Function
async function submitDesiredTraits(event) {
  event.preventDefault();
  let screenname = document.getElementById("screen-name").value;
  let sex = document.querySelector('input[name="desired-sex"]:checked').value;
  //SMOKER
  const smoker = getInputValues('input[name="smoker"]:checked');
  //Drinker
  const drinker = getInputValues('input[name="radio-group2"]:checked');
  //Vegan
  const diet = getInputValues('input[name="radio-group3"]:checked');
  //Liberal
  const politics = getInputValues('input[name="radio-group4"]:checked');
  //Great Smile
  const smile = getInputValues('input[name="great-smile"]:checked');
  //Eyes
  const eyes = getInputValues('input[name="great-eyes"]:checked');
  //Athletic
  const athletic = getInputValues('input[name="athletic"]:checked');
  //Tall
  const tall = getInputValues('input[name="tall"]:checked');
  if (tall.length != 0) {
    physical.unshift(tall);
  } else {
    // console.log("Tall is not checked");
  }
  if (athletic.length != 0) {
    physical.unshift(athletic);
  } else {
    // console.log("Athletic is not checked");
  }
  if (eyes.length != 0) {
    physical.unshift(eyes);
  } else {
    // console.log("Eyes is not checked");
  }
  if (smile.length != 0) {
    physical.unshift(smile);
  } else {
    // console.log("smile is not checked");
  }
  // let others = getCheckboxValues();
  // console.log(others);
  let traits = {
    screenname,
    sex,
    smoker,
    drinker,
    diet,
    politics,
    physical,
    religion,
    hobbies,
    personality,
    children,
    relationship,
    lifestyle,
    age,
  };
  console.log(traits);
  alert("The form has been submitted successfully.");
  postToAPI(traits);
}
async function postToAPI(traits) {
  try {
    const response = await fetch(
      "https://n0nqlqo477.execute-api.us-east-1.amazonaws.com/dev/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(traits),
      }
    );
    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

/*document.addEventListener("DOMContentLoaded", function () {
    var choiceForm = document.getElementById("choiceForm");
    var selectedChoicesList = document.getElementById("selectedChoices");

    choiceForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear existing choices
        selectedChoicesList.innerHTML = '';

        // Get selected choices
        var radioGroups = document.querySelectorAll('.radio-class:checked');
        radioGroups.forEach(function (radioGroup) {
            var selectedLabel = document.querySelector('label[for="' + radioGroup.id + '"]').textContent;
            var listItem = document.createElement('li');
            listItem.textContent = selectedLabel + ': ' + radioGroup.value;
            selectedChoicesList.appendChild(listItem);
        });
    });
});*/

/*$(document).ready(function () {
    var numberOfSelects = 3;
    var startNumber = 1;
    var selectId = ".radio-select";

    $(selectId).change(function () {
        if (this.value === 'option1' || this.value === 'option3') {
            $(this).parent('.select-trail').next('.rating').addClass("selected");
        } else {
            $(this).parent('.select-trail').next('.rating').removeClass("selected");
        }
    });



    $(document).on('click', '.checkcontainer', function () {
        //console.log($(this).find('.radio-class'));
        $(this).find('.radio-class').prop('checked', true);
    });

    $(document).on('click', '.check-label', function () {
        //console.log($(this).find('.check-class'));
        $(this).find('.check-class').prop('checked', true);
    });

    $("[data-fancybox]").fancybox({
        afterClose: function () {
            $("#mySelectt").val('none');
            $('.rating').removeClass('selected');
        }
    });
});

$(window).on('load', function () {
});*/
