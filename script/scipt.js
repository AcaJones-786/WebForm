
function addYearToSpan() {
    const spanElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    spanElement.textContent = currentYear;
}

function getValue() {
    const radioValue = document.querySelector('input[name="student_type"]:checked').value;
    const elements = document.getElementsByClassName('hide');
    // console.log(radioValue);

    if (radioValue === 'newST') {        
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.display = 'none';
        }
    }
    else if (radioValue === 'oldST'){
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
          }
    }
}
//Okay so we have to include multiple years, i was thinking maybe we could do it
//by like having buttons at the top above semester 1 that seperate the years.
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
        document.getElementById('one').value="Academic Skills Development (ASD – non-credit bearing)";
        document.getElementById('two').value="Principles of Business Communication (PBC101D - 20 credits)";
        document.getElementById('three').value="Principles of Business Management (PBM101D - 20 credits)";
        document.getElementById('four').value="Principles of Digital Marketing (PDM101D - 20 credits)";
        document.getElementById('five').value="Principles of Financial Management (PFM101D - 20 credits)";
        document.getElementById('six').value="Principles of Marketing (PMAR101D - 20 credits)";
        document.getElementById('seven').value="Principles of Project Management (PPM101D - 20 credits)";
        document.getElementById('eight').value="Prerequisites: None";
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
