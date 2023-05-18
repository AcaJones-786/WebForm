function addYearToSpan() {
    const spanElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    spanElement.textContent = currentYear;
}

//Copy Banking Details
function copyBankAccountNo(){
    navigator.clipboard.writeText('4056310798');
    alert('Account Number: 4056310798   Copied!')
}

//Change between new and old student
function getValue() {
    const radioValue = document.querySelector('input[name="student_type"]:checked').value;
    const hide_element = document.getElementsByClassName('hide');
    const reveal_element = document.getElementsByClassName('reveal');

    if (radioValue === 'newST') {        
        for (let i = 0; i < hide_element.length; i++) {
          hide_element[i].style.display = 'none';
          reveal_element[i].style.display = 'block';
        }
    }
    else if (radioValue === 'oldST'){
        for (let i = 0; i < hide_element.length; i++) {
            hide_element[i].style.display = 'block';
            reveal_element[i].style.display = 'none';
        }
    }
}
const radioInputs = document.querySelectorAll('input[name="student_type"]');
radioInputs.forEach((input) => {
    input.addEventListener('change', getValue);
});



//Okay so we have to include multiple years, i was thinking maybe we could do it
//by like having buttons at the top above semester 1 that seperate the years.
var year1Button;
var year1Button;
var year1Button;
var prerequisitesButton;


function setProgramme(){
    const selectedOption = document.getElementById('uProgram');
    const selectedValue = selectedOption.value;
    console.log(selectedValue)

    if(selectedValue === 'HCMarketing'){
        document.getElementById('one').value="Academic Literacy (AL101C - 15 credits)";
        document.getElementById('two').value="Fundamentals of Business Communication (FBC101C – 20 credits)";
        document.getElementById('three').value="Fundamentals of Business Management (FBM101C - 20credits)";
        document.getElementById('four').value="Fundamentals of Business Numeracy (FBN101C - 20 credits)";
        document.getElementById('five').value="Fundamentals of Digital Marketing (FDM101C - 20 credits)";
        document.getElementById('six').value="Fundamentals of Marketing (FMAR101C - 20 credits)";
        document.getElementById('seven').value="Fundamentals of Supply Chain Management (FSCM101C – 20 credits)";
        document.getElementById('eight').value="Prerequisites: None";
    }
    else if(selectedValue === 'HCProjectManagement'){
        document.getElementById('one').value="Academic Literacy (AL101C - 15 credits)";
        document.getElementById('two').value="Fundamentals of Business Management (FBM101C - 20 credits)";
        document.getElementById('three').value="Fundamentals of Business Numeracy (FBN101C - 20 credits)";
        document.getElementById('four').value="Fundamentals   of   Project   Management:   An   Introduction   (FUPM101C - 20 credits)";
        document.getElementById('five').value="Project Planning: Integration and Constraints (PPIC101C - 20 credits)";
        document.getElementById('six').value="Project Planning: People and Risk (PPPR101C - 20 credits)";
        document.getElementById('seven').value="Project Management: Tools and Documents (PMTD101C – 20 credits) ";
        document.getElementById('eight').value="Prerequisites: None";
    }
    else if(selectedValue === 'HCSupplyChainManagement'){
        document.getElementById('one').value="Academic Literacy (AL101C - 15 credits)";
        document.getElementById('two').value="Fundamentals of Business Management (FBM101C - 20 credits)";
        document.getElementById('three').value="Fundamentals of Business Numeracy (FBN101C - 20 credits)";
        document.getElementById('four').value="Fundamentals of International Trade (FIT101C - 20 credits)";
        document.getElementById('five').value="Fundamentals of Operations Management (FOM101C - 20 credits)";
        document.getElementById('six').value="Fundamentals of Supply Chain Management (FSCM101C - 20 credits)";
        document.getElementById('seven').value="Fundamentals of Transport and Logistics (FTL101C – 20 credits)";
        document.getElementById('eight').value="Prerequisites: None";
    }
    else if(selectedValue === 'DipMarketingManagement'){

        var button_group = document.createElement('div');

        // var year1Radio = document.createElement('input');
        // year1Radio.type = 'radio';
        // year1Radio.name = 'yearRadioGroup';
        // year1Radio.value = 'Year 1';
        // year1Radio.checked='true';

        // var year2Radio = document.createElement('input');
        // year2Radio.type = 'radio';
        // year2Radio.name = 'yearRadioGroup';
        // year2Radio.value = 'Year 2';

        // var year3Radio = document.createElement('input');
        // year3Radio.type = 'radio';
        // year3Radio.name = 'yearRadioGroup';
        // year3Radio.value = 'Year 3';

        // var prerequisitesRadio = document.createElement('input');
        // prerequisitesRadio.type = 'radio';
        // prerequisitesRadio.name = 'yearRadioGroup';
        // prerequisitesRadio.value = 'Prerequisites';

        // var year1lbl = document.createElement('label');
        // year1lbl.appendChild(year1Radio);
        // year1lbl.appendChild(document.createTextNode('Year 1'));

        // var year2lbl = document.createElement('label');
        // year2lbl.appendChild(year2Radio);
        // year2lbl.appendChild(document.createTextNode('Year 2'));

        // var year3lbl = document.createElement('label');
        // year3lbl.appendChild(year3Radio);
        // year3lbl.appendChild(document.createTextNode('Year 3'));

        // var prerequisitesLabel = document.createElement('label');
        // prerequisitesLabel.appendChild(prerequisitesRadio);
        // prerequisitesLabel.appendChild(document.createTextNode('Prerequisites'));

        // button_group.appendChild(year1lbl);
        // button_group.appendChild(year2lbl);
        // button_group.appendChild(year3lbl);
        // button_group.appendChild(prerequisitesLabel);

        // Create buttons
        year1Button = document.createElement('button');
        year1Button.textContent = 'Year 1';

        year2Button = document.createElement('button');
        year2Button.textContent = 'Year 2';

        year3Button = document.createElement('button');
        year3Button.textContent = 'Year 3';

        prerequisitesButton = document.createElement('button');
        prerequisitesButton.textContent = 'Prerequisites';

        // Append buttons to the container
        button_group.appendChild(year1Button);
        button_group.appendChild(year2Button);
        button_group.appendChild(year3Button);
        button_group.appendChild(prerequisitesButton);

        var parentDiv = document.getElementById('tblHeader');
        parentDiv.appendChild(button_group)

        document.getElementById('one').value="Marketing 1 (MAR101B - 20 credits)";
        document.getElementById('two').value="Academic Skills Development (ASD - non-credit bearing)";
        document.getElementById('three').value="Business Communication (BC101B - 20 credits)";
        document.getElementById('four').value="Business Management 1 (BM101B - 20 credits)";
        document.getElementById('five').value="Business Statistics (BS101B - 20 credits)";
        document.getElementById('six').value="Economic Principles (ECOP101B - 20 credits)";
        document.getElementById('seven').value="Financial Management 1 (FM101B - 20 credits)";
        document.getElementById('eight').value="----";
    }
    else if(selectedValue === 'BComInterSupplyChainManagement'){
        document.getElementById('one').value="";
        document.getElementById('two').value="";
        document.getElementById('three').value="";
        document.getElementById('four').value="";
        document.getElementById('five').value="";
        document.getElementById('six').value="";
        document.getElementById('seven').value="";
        document.getElementById('eight').value="Prerequisites: None";
    }
    else if(selectedValue === 'BacMarketingManagementScience'){
        document.getElementById('one').value="";
        document.getElementById('two').value="";
        document.getElementById('three').value="";
        document.getElementById('four').value="";
        document.getElementById('five').value="";
        document.getElementById('six').value="";
        document.getElementById('seven').value="";
        document.getElementById('eight').value="Prerequisites: None";
    }
    else if(selectedValue === 'BacAdminMarketingManagement'){
        document.getElementById('one').value="";
        document.getElementById('two').value="";
        document.getElementById('three').value="";
        document.getElementById('four').value="";
        document.getElementById('five').value="";
        document.getElementById('six').value="";
        document.getElementById('seven').value="";
        document.getElementById('eight').value="Prerequisites: None";
    }
    else if(selectedValue === 'singlemoduleEntry'){
        document.getElementById('one').value="";
        document.getElementById('two').value="";
        document.getElementById('three').value="";
        document.getElementById('four').value="";
        document.getElementById('five').value="";
        document.getElementById('six').value="";
        document.getElementById('seven').value="";
        document.getElementById('eight').value="Prerequisites: None";
    }
}
function SortYear(year){
    const selectedOption = document.getElementById('uProgram');
    const selectedValue = selectedOption.value;
    
    if(selectedValue === 'DipMarketingManagement' && year == '2')
    {
        document.getElementById('one').value="Marketing 2 (MAR202B - 20 credits)";
        document.getElementById('two').value="Brand Management (BM201B - 20 credits)";
        document.getElementById('three').value="Business Management 2 (BM202B - 20 credits)";
        document.getElementById('four').value="Financial Management 2 (FM202B - 20 credits)";
        document.getElementById('five').value="Integrated Marketing Communications (IMC201B - 20 credits)";
        document.getElementById('six').value="Research: Theory (RT201B – 20 credits)";
        document.getElementById('seven').value="----";
        document.getElementById('eight').value="Prerequisites: None";
    }
    else if(selectedValue === 'DipMarketingManagement' && year == '1')
    {
        document.getElementById('one').value="Marketing 1 (MAR101B - 20 credits)";
        document.getElementById('two').value="Academic Skills Development (ASD - non-credit bearing)";
        document.getElementById('three').value="Business Communication (BC101B - 20 credits)";
        document.getElementById('four').value="Business Management 1 (BM101B - 20 credits)";
        document.getElementById('five').value="Business Statistics (BS101B - 20 credits)";
        document.getElementById('six').value="Economic Principles (ECOP101B - 20 credits)";
        document.getElementById('seven').value="Financial Management 1 (FM101B - 20 credits)";
        document.getElementById('eight').value="----";
    }
    else if(selectedValue === 'DipMarketingManagement' && year == '3')
    {
        document.getElementById('one').value="Marketing 3 (MAR303B - 20 credits)";
        document.getElementById('two').value="Business Management 3 (BM303B - 20 credits)";
        document.getElementById('three').value="Financial Management 3 (FM303B - 20 credits)";
        document.getElementById('four').value="Marketing Research: Project ( RP302B - 20 credits)";
        document.getElementById('five').value="Elective: Business-to-Business Marketing (BBM001B - 20 credits)";
        document.getElementById('six').value="Elective: Digital Marketing Applications (DMA001B - 20 credits)";
        document.getElementById('seven').value="Elective: Retail Marketing (RM001B - 20 credits)";
        document.getElementById('eight').value="Prerequisites: ";
    }
    else if(selectedValue === 'DipMarketingManagement' && year == 'pre')
    {
        document.getElementById('one').value="";
        document.getElementById('two').value="";
        document.getElementById('three').value="";
        document.getElementById('four').value="";
        document.getElementById('five').value="";
        document.getElementById('six').value="";
        document.getElementById('seven').value="";
        document.getElementById('eight').value="----";
    }
}










