function placeData(key,className,string){
  let url=`https://badapi.metype.repl.co/api/users/${sessionStorage.getItem("token")}/get/${key}`;
  $.ajax({
    url : url,
    type:"GET",
    success: function(result){
      $('.'+className).html(`${string.replace("$value",result.value)}`)
    },
    error: function(error){
      console.error("Error " + error)
      window.location.href = "login.html";
      sessionStorage.setItem("token",undefined);
    }
  })
}

async function getUser(user){
  let returned = null;
  let url=`https://badapi.metype.repl.co/api/users/get/user/${user}`;
  await $.ajax({
    url : url,
    type:"GET",
    success: function(result){
      returned = result;
    },
    error: function(error){
      console.log(error)
    }
  })
  return returned;
}

function placeImage(key,className){
  let url=`https://badapi.metype.repl.co/api/users/${sessionStorage.getItem("token")}/get/${key}`;
  $.ajax({
    url : url,
    type:"GET",
    success: function(result){
      $('.'+className).attr("src",result.value)
    },
    error: function(error){
      console.error("Error " + error)
      window.location.href = "login.html";
      sessionStorage.setItem("token",undefined);
    }
  })
}

function setData(key, value){
  let url=`https://badapi.metype.repl.co/api/users/${sessionStorage.getItem("token")}/set/${key}`;
  $.post(url, {value:value});
}

function populateHeader(unlinked) {
  let links = ["index.html","credits.html","help_page.html","in_game_store.html","it_page.html","login.html","main_menu.html","school_map.html","settings.html","user_profile.html","user_stats.html","users.html"]

  let names = ["Main","Credits","Help","Store","IT","Login","Main","Map","Settings","Profile","Stats","Users"]

  let header = $("<header></header>");
  header.addClass("header");
  header.append($("<h1></h1>").html("Header"))
  let ul = $("<ul></ul>")
  header.append(ul);
  for(let i in links){
    let a = $("<a></a>")
    ul.append($("<li></li>").addClass("nav").append(a.addClass("nav")));
    if(unlinked == links[i]){
      a.addClass("current");
    }else{
      a.attr("href",links[i])
    }
    a.html("<h1>"+names[i]+"</h1>");
  }
  $("body").prepend(header);
}


