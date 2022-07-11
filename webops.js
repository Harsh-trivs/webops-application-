fetch(' https://retoolapi.dev/PNAOH1/data ')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            var list = []
            for (var i = 0; i < data.length; i++){
                 list[i] = data[i].Company;
            }
            var sortedlist = list.sort();
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Id: ' + data[i].id + '  '+' Name: ' + sortedlist[i] + '  '  ;
                mainContainer.appendChild(div);
            }
        }