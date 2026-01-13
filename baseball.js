<script>
        const xhr = new XMLHttpRequest();

        xhr.onload = function() {
          if(xhr.status === 200){
            const data= JSON.parse(xhr)
          }
        };

        xhr.open("GET", "player.JSON");
        xhr.send();
    </script>
