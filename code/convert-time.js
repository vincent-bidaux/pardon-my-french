<script>
  $(document).ready(function() {
      function formatTime(oldTime) {
          oldTime = oldTime.replace(":", " ")
          var arr = oldTime.split(" ")

          var ampm = arr[2].toLowerCase()
          var hour = 0

          if (arr[0] == 12) {
              if (ampm == "am") {
                  hour = 0
              } else {
                  hour = 12
              }
          } else {
              if (ampm == "pm") {
                  hour = parseInt(arr[0]) + 12
              } else {
                  hour = arr[0]
              }
          }
          return hour + ":" + arr[1]
      }

      // You can replace 'timetoformat' below by any class name you want to use on time elements in your design
      $('.timetoformat').each(function() {
          $(this).html(formatTime($(this).html()));
      });
  });
</script>