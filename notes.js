 $.ajax({
            url: testUrl,
            type: "GET",
            dataType: "json"
        }).done(function (data) {
            
           displayBooks(data.responseJSON.items["0"].volumeInfo.title)
            console.log(data);
        })