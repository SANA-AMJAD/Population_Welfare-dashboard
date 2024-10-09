// ****Toggle Button****
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var mainContent = document.getElementById("content");
  sidebar.classList.toggle("collapsed");
  mainContent.classList.toggle("expanded");
}
// *****Link Active*****
const linkColor = document.querySelectorAll('.sidebar-link')

function colorLink(){
if(linkColor){
linkColor.forEach(l=> l.classList.remove('active'))
this.classList.add('active')
}
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))



//***** Overlay*****
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
        if (sidebar.classList.contains('open')) {
            addCloseButton();
        } else {
            removeCloseButton();
        }
    });

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        removeCloseButton();
    });

    function addCloseButton() {
        if (!document.getElementById('close-btn')) {
            const closeButton = document.createElement('button');
            closeButton.id = 'close-btn';
            closeButton.innerHTML = '<i class="fas fa-times"></i>';
            closeButton.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; position: absolute; top: 1rem; right: 1rem;';
            closeButton.addEventListener('click', function () {
                sidebar.classList.remove('open');
                overlay.classList.remove('open');
                removeCloseButton();
            });
            sidebar.appendChild(closeButton);
        }
    }

    function removeCloseButton() {
        const closeButton = document.getElementById('close-btn');
        if (closeButton) {
            closeButton.remove();
        }
    }
});
