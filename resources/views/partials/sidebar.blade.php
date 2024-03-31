<aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
    <div class="main-navbar">
      <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
        <a class="navbar-brand w-100 mr-0" href="{{ url("/") }}" style="line-height: 25px; background-color:#707070a3">
          <div class="d-table m-auto">
            <img id="main-logo" class="d-inline-block align-top mr-1" src="{{ asset("/../assets/images/logo/logo_b.png") }}"
             alt="Shards Dashboard" style="width:85%">
          </div>
        </a>
        <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
          <i class="material-icons">&#xE5C4;</i>
        </a>
      </nav>
    </div>
    <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
      <div class="input-group input-group-seamless ml-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"> </div>
    </form>
    <div class="nav-wrapper">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link " href="{{ url("/") }}">
            <i class="material-icons">edit</i>
            <span>page accueil</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="{{ url("/commandes") }}">
            <i class="material-icons">vertical_split</i>
            <span>Mes commandes</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="{{ url("/products") }}">
            <i class="material-icons">folder</i>
            <span>products</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="{{ url("/users") }}">
            <i class="material-icons">note_add</i>
            <span>users</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{ url("/profile") }}">
            <i class="material-icons">person</i>
            <span>Profile</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{ url("/notifications") }}">
            <i class="material-icons">notifications</i>
            <span>Notifications</span>
          </a>
        </li>
      </ul>
    </div>
</aside>
