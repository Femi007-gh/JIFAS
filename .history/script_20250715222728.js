/* ─── Base Reset ─────────────────────────────────────────────── */
*{margin:0;padding:0;box-sizing:border-box;}

html,body{width:100%;overflow-x:hidden;}

body{
  font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;
  padding-top:80px;                 /* space for fixed navbar */
}

/* ─── Navbar Shell ───────────────────────────────────────────── */
.navbar{
  background:#fff;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:10px 20px;
  position:fixed;top:0;left:0;
  border-bottom:1px solid #ccc;
  z-index:1000;
}

.left-section{display:flex;align-items:center;flex-shrink:0;}
.grass{height:60px;width:80px;object-fit:contain;margin-right:10px;cursor:pointer;}
.integrated{font-size:16px;color:#2a4a37;text-decoration:none;line-height:1.2;}

/* ─── Hamburger ──────────────────────────────────────────────── */
.hamburger{
  display:none;
  font-size:28px;
  background:none;border:none;
  cursor:pointer;color:#000;
  z-index:1001;                     /* above overlay */
  margin-left:auto;
}

/* ─── Mobile Overlay ─────────────────────────────────────────── */
.nav-content{
  display:none;                     /* hidden by default */
  position:fixed;inset:0;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:30px;
  padding:30px 20px;
  background:#fff;
  z-index:1000;
  text-align:center;
}
.nav-content.show{display:flex;}

.close-btn{
  position:absolute;top:15px;right:20px;
  font-size:32px;cursor:pointer;color:#000;
  z-index:1002;                     /* ensure always clickable */
}

/* ─── Nav Links Container ───────────────────────────────────── */
.navbar-nav{display:flex;justify-content:center;width:100%;position:relative;}

.navbar-list{
  list-style:none;
  display:flex;flex-direction:column;
  align-items:center;gap:25px;
}

/* list items are now *auto* width so dropdown aligns under link */
.navbar-list li{position:relative;}

.navbar-list a{
  display:inline-block;
  color:#000;text-decoration:none;
  font-size:16px;padding:6px 8px;
}
.navbar-list a:hover{color:green;}

/* ─── Dropdown ──────────────────────────────────────────────── */
.dropdown-content{
  display:none;
  position:absolute;
  top:100%;left:0;                  /* directly under parent link */
  background:#fff;
  box-shadow:0 8px 16px rgba(0,0,0,.2);
  min-width:220px;border-radius:6px;
  flex-direction:column;
  padding:15px;list-style:none;
  z-index:9999;
}
.dropdown:hover .dropdown-content{display:flex;}

.dropdown-content a{
  padding:12px 20px;color:#2a4a37;font-size:16px;border-radius:4px;
  transition:background-color .3s,padding-left .3s;
}
.dropdown-content a:hover{background:#f0f0f0;padding-left:25px;}

/* ─── Right Section ─────────────────────────────────────────── */
.right-section{
  display:flex;align-items:center;gap:10px;min-width:150px;
}

.search-container{
  display:flex;align-items:center;
  background:#fff;padding:5px 10px;border:1px solid grey;border-radius:4px;
  transition:box-shadow .3s,border-color .3s;
}
.search-container:focus-within{box-shadow:0 0 5px green;border-color:green;}

.search-icon{font-size:16px;margin-right:5px;color:#000;}
.search-container input{
  border:none;outline:none;background:transparent;
  font-size:14px;width:100px;color:#333;
  transition:all .3s;
}
.search-container input:focus{
  width:160px;border-bottom:2px solid green;background:#f5fff5;
}

.profile-pic{
  width:40px;height:40px;border-radius:50%;object-fit:cover;cursor:pointer;
}

/* ─── Desktop Layout (>979 px) ──────────────────────────────── */
@media(min-width:980px){
  .hamburger{display:none;}
  .nav-content,.nav-content.show{
    position:static;display:flex;
    flex-direction:row;align-items:center;justify-content:center;
    background:transparent;padding:0;width:100%;
  }
  .close-btn{display:none;}

  .navbar-list{
    flex-direction:row;gap:20px;align-items:center;text-align:left;
  }

  .left-section{margin-right:auto;}
  .right-section{margin-left:auto;}
}
