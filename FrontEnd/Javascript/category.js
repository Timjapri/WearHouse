$.ajax({
    url: 'https://localhost:7285/api/Category',
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        var categorylist = document.getElementById("categorylist");
        var x = 1;
        data.forEach(function(item){
            var itemrow = document.createElement("tr");
            
            var itemnum = document.createElement("td");
            itemnum.classList.add("no");
            itemnum.innerHTML = x + ".";
            itemrow.appendChild(itemnum);
            
            var itemname = document.createElement("td");
            itemname.classList.add("ca");
            itemname.innerHTML = item.cat;
            itemrow.appendChild(itemname);
            
            var itemaction = document.createElement("td");
            itemaction.classList.add("ac");
            
            var editbutton = document.createElement("button");
            editbutton.innerHTML = "Edit";
            editbutton.type = "button";
            editbutton.value = x;
            editbutton.setAttribute("class", "bedi");
            editbutton.setAttribute("onclick", "showPopup('editPopup','" + item.cat + "','" + item.id + "')");
            
            var deletebutton = document.createElement("button");
            deletebutton.innerHTML = "Delete";
            deletebutton.type = "button";
            deletebutton.value = x;
            deletebutton.setAttribute("class", "bdel");
            deletebutton.setAttribute("onclick", "showPopup('deletePopup','" + item.cat + "','" + item.id + "')");

            itemaction.appendChild(editbutton);
            itemaction.appendChild(deletebutton);
            itemrow.appendChild(itemaction);

            categorylist.appendChild(itemrow);
            x+=1;
        });
    },
    error: function (data) {
        console.log(data);
        alert('Error');
    }
});

function showPopup(id,name,itemid) {
    var popup = document.getElementById(id);
    if(id != 'addPopup')
    {
        var iid = document.createElement("input");
        if(id == 'editPopup'){
            iid.id = 'categoryEditId';
        }else if(id == 'deletePopup'){
            iid.id = 'categoryDeleteId';
        }
        iid.style.display = "none";
        iid.type = 'text';
        iid.defaultValue = itemid;
        popup.appendChild(iid);

        if(id == 'editPopup'){
            document.getElementById("categoryEditInput").value = name;
        }
    }

    popup.style.display = "block";
}

function closePopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = "none";
}

function addCategory() {
    var categoryInput = document.getElementById("categoryInput").value;

    var request = {"cat": categoryInput}

    $.ajax({
        url: 'https://localhost:7285/api/Category',
        type: 'POST',
        data: JSON.stringify(request),
        contentType: 'application/json; charset=utf-8',
        success: function () {
            alert('Success');
            location.reload();
        },
        error: function (data) {
            console.log(data);
            alert('Error');
        }
    });

    closePopup("addPopup");
    location.reload();
}

function editCategory() {
    var categoryEditInput = document.getElementById("categoryEditInput").value;
    var categoryEditID = document.getElementById("categoryEditId").value;
    
    var request = {"cat": categoryEditInput}
    
    $.ajax({
        url: 'https://localhost:7285/api/Category?id='+categoryEditID,
        type: 'PUT',
        data: JSON.stringify(request),
        contentType: 'application/json, charset=utf-8',
        success: function () {
            alert('Success');
            location.reload();
        },
        error: function (data) {
            console.log(data);
            alert('Error');
        }
    });

    closePopup("editPopup");
    location.reload();
}

function deleteCategory() {
    var categoryDeleteID = document.getElementById("categoryDeleteId").value;
    
    $.ajax({
        url: 'https://localhost:7285/api/Category?id='+categoryDeleteID,
        type: 'DELETE',
        success: function () {
            alert('Success');
            location.reload();
        },
        error: function (data) {
            console.log(data);
            alert('Error');
        }
    });
    closePopup("deletePopup");
    location.reload();
}
