const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function fetchValues(attrs,...nodeList){
    let attrCount = nodeList.length;
    let dataCount = nodeList[0].length;

    let tempArr = [];

    for(var i=0;i<dataCount;i++){
        dataObj = {};
        for(var j=0;j<attrCount;j++){
            dataObj[`${attrs[j]}`] = nodeList[j][i].value;
            if(attrs[j]=='startDate'){
                const temp = new Date(dataObj[`${attrs[j]}`]);
                dataObj[`${attrs[j]}`] = temp.getFullYear();
            }
            else if(attrs[j]=='endDate'){
                const temp = new Date(dataObj[`${attrs[j]}`]);
                dataObj[`${attrs[j]}`] = temp.getFullYear();
            }
            else if(attrs[j]=='end'){
                const temp = new Date(dataObj[`${attrs[j]}`]);
                dataObj[`${attrs[j]}`] = months[temp.getMonth()]+" "+temp.getFullYear();
            }
        }
        tempArr.push(dataObj);
    }

    return tempArr;
}

function showData(mainParent,objList,attrsList){
    for(var i=0;i<objList.length;i++){
        let parent= document.createElement('div');
        parent.classList.add('mt-3');
        let child1 = document.createElement('p');
        child1.classList.add('h5');
        child1.innerHTML = objList[i][attrsList[0]];
        parent.appendChild(child1);
        let child2 = document.createElement('div');
        child2.classList.add('hstack');
        child2.classList.add('gap-2');
        let subchild1 = document.createElement('div');
        subchild1.innerHTML = objList[i][attrsList[1]];
        let subchild2 = document.createElement('div');
        subchild2.classList.add('vr');
        let subchild3 = document.createElement('div');
        if(attrsList>4){
            subchild3.innerHTML = objList[i][attrsList[2]]+"-"+objList[i][attrsList[3]];
        }
        else{
            subchild3.innerHTML = objList[i][attrsList[2]];
        }
        child2.appendChild(subchild1);
        child2.appendChild(subchild2);
        child2.appendChild(subchild3);
        parent.appendChild(child2);
        let child3 = document.createElement('p');
        if(attrsList>4){
            child3.innerHTML = "CGPA- "+ objList[i][attrsList[4]];
        }
        else{
            child3.innerHTML = objList[i][attrsList[3]];
        }
        parent.appendChild(child3);
        mainParent.appendChild(parent);
    }
}

function showList(mainParent,dataList){
    for(var i=0;i<dataList.length;i++){
        var parent = document.createElement("li");
        parent.innerHTML = dataList[i];
        mainParent.appendChild(parent);
    }
}

function generateCV(){
    alert("Hello");
    let firstname = document.getElementById("firstname").value;
    let secondname = document.getElementById("secondname").value;
    let emailId = document.getElementById("emailId").value;
    let address = document.getElementById("address").value;
    let phoneNo = document.getElementById("phoneNo").value;
    let profile = document.getElementById("profile").value;
    let linkedin = document.getElementById("linkedin").value;
    let objective = document.getElementById("objective").value;

    let school = document.getElementsByClassName("school");
    let degree = document.getElementsByClassName("degree");
    let startDate = document.getElementsByClassName("startDate");
    let endDate = document.getElementsByClassName("endDate");
    let marks = document.getElementsByClassName("marks");

    let company = document.getElementsByClassName("company");
    let role = document.getElementsByClassName("role");
    let end = document.getElementsByClassName("end");
    let describe = document.getElementsByClassName("description");  
    
    let skills = document.getElementById("skills").value;
    let strengths = document.getElementById("strengths").value;
    let accomplishments = document.getElementById("accomplishments").value;
    
    let education = fetchValues(['school','degree','startDate','endDate','marks'],school,degree,startDate,endDate,marks);
    let experience = fetchValues(['company','role','end','describe'],company,role,end,describe);
    
    const skillSet = skills.split(",");
    const strengthSet = strengths.split(",");
    const accompSet = accomplishments.split(",");

    document.getElementById("res_phone").innerHTML = phoneNo;
    document.getElementById("res_email").innerHTML = emailId;
    document.getElementById("res_location").innerHTML = address;
    document.getElementById("res_url").innerHTML = linkedin;

    document.getElementById("res_objective").innerHTML = objective;

    const skillsParent = document.getElementById("res_skillSet");
    showList(skillsParent,skillSet);

    const strengthParent = document.getElementById("res_strengthSet");
    showList(strengthParent,strengthSet);

    const accompParent = document.getElementById("achievements");
    showList(accompParent,accompSet);

    document.getElementById("res_username").innerHTML = firstname + " " + secondname;

    let res_exp = document.getElementById('experience');
    let res_edu = document.getElementById('education');

    console.log(experience);
    
    showData(res_exp,experience,['company','role','end','describe']);
    showData(res_edu,education,['school','degree','startDate','endDate','marks']);

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function showImage(){
    let profile = document.getElementById("profile");
    let reader = new FileReader();
    reader.readAsDataURL(profile.files[0]);
    reader.onload = function(event){
        document.getElementById("profileImg").src = event.target.result;
    }
}

function displayForm(){
    document.getElementById("cv-template").style.display= "none";
    document.getElementById("cv-form").style.display = "block";
}

function printCV(){
    window.print();
}