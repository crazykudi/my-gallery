'use strict'
// view & events controler   

function renderProjs() {
    var projs = gProjs;
    var idx = 0;
    var strHtmls = projs.map(function (proj) {
        idx++;
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx}">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/0${idx}-thumbnail.jpg" alt="" href = "http://www.google.com/">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.desc}</p>
        </div>
        </div> 
        `
    })
    document.querySelector('.protfolio-proj').innerHTML = strHtmls.join('')
    renderModal();
    // document.querySelector('.protfolio-proj').innerHTML = strModal.join('')
}

function renderServices() {
    var services = gServices;
    var strHtmls = services.map(function (service) {
        return `
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fa fa-circle fa-stack-2x text-primary"></i>
            <i class="fa ${service.img} fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">${service.speciality}</h4>
          <p class="text-muted">${service.desc}.</p>
        </div>
        `
    })
    document.querySelector('.services-list').innerHTML = strHtmls.join('')
}

function renderModal() {
    var projs = gProjs;
    var idx = 0;
    var strHtmls = projs.map(function (proj) {
        idx++;
        return `
                <div class="portfolio-modal modal fade" id="portfolioModal${idx}" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                    </div>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                            <!-- Project Details Go Here -->
                            <h2>${proj.name}</h2>
                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                            <a href="${proj.url}" target="_block">
                            <img class="img-fluid d-block mx-auto" src="img/portfolio/0${idx}-full.jpg" hreaf="google.com" alt=""></a>
                            <p>${proj.desc}</p>
                            <ul class="list-inline">
                            <li>Date: ${proj.publishedAt}</li>
                            <li>Category: ${proj.labels}</li>
                            </ul>
                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                            <i class="fa fa-times"></i>
                            Close Project</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            `
    })
    document.querySelector('.modals').innerHTML = strHtmls.join('');
}


function onSendEmail() {
    var elEmailVal = document.getElementById('email').value;
    var elSubjectVal = document.getElementById('subject').value;
    var elMsgBodyVal = document.getElementById('msgbody').value;
    console.log(elEmailVal);
    console.log(elSubjectVal);
    console.log(elMsgBodyVal);
    var emailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${elEmailVal}&su=${elSubjectVal}&body=${elMsgBodyVal}`;
    window.open(emailURL);
}
