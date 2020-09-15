var btnData = document.getElementById("btnGetData");
btnData.addEventListener('click', getDataFromServer);

var btnpost = document.getElementById('btnPostData');
btnpost.addEventListener('click', postDataToServer);

function getDataFromServer() {
    //alert('Hi');
    console.log('Hello! There');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            
            //let list = document.getElementById('listdata');
            str = "";
            // for(key in obj){
            //     str += `<li>${obj[key].employee_salary}</li>`
            // }
            obj.forEach(function(objdata){
                objdata.push(`<tr>
                 <td>${objdata.id}<td>
                 <td>${objdata.employee_name}<td>
                 <td>${objdata.employee_salary}<td>
                 <td>${objdata.employee_age}<td>
                 </tr>`)
            });
            document.getElementById('data').innerHTML = str;
            // mydata.forEach(function(obj){
            //     result.push(`<tr>
            //     <td>${obj.id}<td>
            //     <td>${obj.employee_name}<td>
            //     <td>${obj.employee_salary}<td>
            //     <td>${obj.employee_age}<td>
            //     </tr>`)
            
            //})
        }
        else {
            console.log('error')
        }
    }

    xhr.send();
}

function postDataToServer(){
    //alert('Hi!');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload = function(){
        if(xhr.status ===200){
            console.log(this.responseText);
        }
        else{
            console.log('error');
        }
    }

    //send the request
    params = `{"name":"ilovemyindia","salary":"10000000","age":"32"}`;
    xhr.send(params)
}
