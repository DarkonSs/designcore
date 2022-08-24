var datos3 = document.getElementById('server-items-header')

datos3.innerHTML = `
<div class="navbar">
  <ul class="nav1">
    <a class="dclogo" href="../Home.html">
      <img src="../IMG/DCLOGO_white.png" alt="" width="30">
    </a>

    <div class="barra">

    <a class="svbtn" href="../Home.html">Home</a>
    <a class="svbtn currentPlace" href="../faq/main-page.html">FAQ</a>

    <div class="dropdown">
      <a class="svbtn">Server Items <img class="arrow" src="../IMG/arrow_down.png" alt=""></a>
      <div class="dropdown-content">
        <div class="dropdown-content1">
          <a onclick="window.location.href = 'official_rules.html'">Official Rules</a>
          <a onclick="window.location.href = 'roles_info.html'">Roles Info</a>
          <a onclick="window.location.href = 'emojis_list.html'">Emojis List</a>
        </div>
        <div class="dropdown-content2">
          <a onclick="window.location.href = 'games_assets.html'">Game Assets</a>
          <a onclick="window.location.href = 'server_information.html'">Server Information</a>
          <a onclick="window.location.href = 'materials_resources.html'">Materials & Resources...</a>
        </div>
      </div>
    </div>

    <a class="svbtn bb" onclick="window.open('https://discord.gg/PxRQGY5YD8')">Join Us <img class="AA" src="../IMG/open_new_tab.png" alt=""></a>
    <a class="svbtn bb" onclick="window.open('../bot.html')">Discord Bot <img class="AA" src="../IMG/open_new_tab.png" alt=""></a>

    </div>
  </ul>
  <ul class="nav2">
    <a class="svbtn bb Darkons" href="../DarkonS.html"><img class="AA" src="../IMG/face.png" alt=""> DarkonS</a>
  </ul>

  <div onclick="hambmenu()" class="hamb">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <section class="seccion hidden-section" id="section">
    <a class="svbtn currentPlace" href="Home.html">Home</a>
    <a class="svbtn" href="../faq/main-page.html">FAQ</a>

    <div class="dropdown drop-in-section">
      <a onclick="myFunction()" class="svbtn bb align-in-seccion">Server Items <img class="arrow" src="../IMG/arrow_down.png" alt=""></a>
      <div id="drop-content" class="dropdown-content-in-setion" style="display: none;">
        <a href="official_rules.html">Official Rules</a>
        <a href="roles_info.html">Roles Info</a>
        <a href="emojis_list.html">Emojis List</a>
        <a href="games_assets.html">Game Assets</a>
        <a href="server_information.html">Server Information</a>
        <a href="materials_resources.html">Materials & Resources...</a>
      </div>
    </div>

    <a class="svbtn bb align-in-seccion" onclick="window.open('https://discord.gg/PxRQGY5YD8')">Join Us <img class="AA" src="../IMG/open_new_tab.png" alt=""></a>
    <a class="svbtn bb align-in-seccion" onclick="window.open('../bot.html')">Discord Bot <img class="AA" src="../IMG/open_new_tab.png" alt=""></a>
    <a class="svbtn bb Darkons currentPlace align-in-seccion" href="../DarkonS.html"><img class="AA" src="../IMG/face.png" alt=""> DarkonS</a>
  </section>

</div>
`
