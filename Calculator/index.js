var loader = document.querySelector(".loader")

  window.addEventListener("load", vanish);
  
  function vanish() {
    loader.classList.add("disppear");
  }

var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }

            if(btntext == '%') {
                btntext = '^';
            }
            screen.value += btntext;
        });
    }

    function sin() {
        screen.value = Math.sin(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function pow2() {
        screen.value = Math.pow(screen.value, 2);
    }

    function pow3() {
        screen.value = Math.pow(screen.value, 3);
    }

    function pow10() {
        screen.value = Math.pow(10, screen.value);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function log() {
        screen.value = Math.log(screen.value);
    }

    function pi() {
        screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }

    document.addEventListener("keypress", function(e) {
        if(e.key === "Enter") {
        const btn = document.querySelector("#eval");

        btn.click();

        }
    });

    function onlyNumberKey(evt) {
          
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }