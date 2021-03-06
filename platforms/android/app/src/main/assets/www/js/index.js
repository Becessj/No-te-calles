/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function(id) {
		document.getElementById("setLocalStorage").addEventListener("click",setLocalStorage);
		document.getElementById("showLocalStorage").addEventListener("click",showLocalStorage);
		document.getElementById("removeProjectFromLocalStorage").addEventListener("click",removeProjectFromLocalStorage);
		document.getElementById("getLocalStorageByKey").addEventListener("click",getLocalStorageByKey);
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent:function() {
		
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		document.getElementById("conv").addEventListener('click',conversion);
    }
};


app.initialize();
function setLocalStorage()
{
	localStorage.setItem("Name","Ghost");
	localStorage.setItem("Job","Developer");
	localStorage.setItem("Project","MoblieApp");
	alert("Data added successfully..");
}
function showLocalStorage()
{
	alert(localStorage.getItem("Name"));
	alert(localStorage.getItem("Job"));
	alert(localStorage.getItem("Project"));
}
function removeProjectFromLocalStorage()
{
	localStorage.removeItem("Project");
	alert("Project Removed successfully..");
}
function getLocalStorageByKey()
{
	for(i=0;i<=2;i++)
	alert(localStorage.key(i));
}