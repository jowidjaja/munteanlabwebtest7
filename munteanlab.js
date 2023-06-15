const buttons = document.querySelectorAll('.popup_button');
const popUp = document.querySelector('.pop-up');
const blurry = document.querySelector('.peoplepage')

const people = [
    {
        name: "Brian Muntean, Ph.D.",
        title: "Principle Investigator",
        about: "Lorem Ipsum, add more content later, description, titles, awards, honors, other links, etc.",
        papers: "See the <a href='papers.html'><em>Papers</em></a> tab for more information.",
        imageSrc: "images/brian_muntean.jpg",

    },
    {
        name: "Douglas Sloan, B.S.",
        title: "Research Assistant",
        about: "Lorem Ipsum, add more content later, description, titles, awards, honors, other links, etc.",
        papers: "Sloan DC, Cryan CE, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/36736897/' target='_blank' class='pub_title'> Multiple potassium channel tetramerization domain (KCTD) family members interact with Gβγ, with effects on cAMP signaling.</a>  J Biol Chem. 2023 Mar;299(3):102924. doi: 10.1016/j.jbc.2023.102924. Epub 2023 Feb 1. PubMed PMID: 36736897; PubMed Central PMCID: PMC9976452.",
        imageSrc: "images/douglas_sloan.jpg",
    },
    {
        name: "Casey Cryan, B.S.",
        title: "Research Assistant",
        about: "Lorem Ipsum, add more content later, description, titles, awards, honors, other links, etc.",
        papers: "Sloan DC, Cryan CE, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/36736897/' target='_blank' class='pub_title'> Multiple potassium channel tetramerization domain (KCTD) family members interact with Gβγ, with effects on cAMP signaling.</a>  J Biol Chem. 2023 Mar;299(3):102924. doi: 10.1016/j.jbc.2023.102924. Epub 2023 Feb 1. PubMed PMID: 36736897; PubMed Central PMCID: PMC9976452.",
        imageSrc: "images/casey_cryan.jpg",
    },
    {
        name: "Yini Liao, M.S.",
        title: "Research Assistant",
        about: "<strong>EDUCATION:</strong><br> Visual Arts Program • 2012-2013 • University of Toledo, U.S. <br> PHD Program in Biology • 2011-2012 • University of Toledo, U.S. <br> M.S. in Biology • 2011 • Eastern New Mexico University, U.S. <br> B.S. in Forestry • 2010 • Central South University of Forestry and Technology, China <br> B.S. in Biology • 2009 • Eastern New Mexico University, U.S. <br> <strong>WORK EXPERIENCE: </strong> <br> WOC Research Assistant • Charlie Norwood VA Medical Center, Augusta • Jun 2022- Feb 2023 <br> Research Affiliate, Culver Vision Discovery Institute, Augusta University • May 2022- Feb 2023 <br> Research Assistant • Clinical & Experimental Therapeutics, College of Pharmacy, Augusta Campus, University of Georgia • May 2022- Feb 2023 <br> Volunteer Research Assistant • Department of Pharmacology & Toxicology, Medical College of Georgia, Augusta University • Nov 2021- Feb 2023 <br> Library Clerk • Reese Library, Augusta University • Sep 2021- Apr 2022 <br> Realtor • United Real Estate • May 2021- Feb 2022 <br> Business Owner & Photographer • Yini Photography & Dress Boutique • Nov 2014- Sep 2016 <br> Teaching Assistant • University of Toledo • Aug 2011- May 2012 <br> Teaching Assistant • Eastern New Mexico University • Jan 2010- May 2011",
        papers: "n/a",
        imageSrc: "images/yini_liao.jpg",
    },
    {
        name: "Josephine Widjaja",
        title: "Research Assistant",
        about: "I am a graduate student at the Dental College of Georgia. I began working in Dr. Muntean's lab through the CURS Summer Scholar's program. Here, I investigated the interactions of a motor related protein KCTD5. Since then, I have worked on an engineering project to develop a custom rotating rod device for motor performance testing and am working on a manuscript for this device. I have also performed western blots for experiments related to how the circadian rhythmn influences proteins in the motor learning pathway and presented my findings at the CURS research symposium. Using HTML, CSS, and JavaScript, I have also worked on developing and maintaining a website for the Muntean lab. I hope to continue to explore software and the biological sciences and intermingle disciplines from STEM.",
        papers: "n/a",
        imageSrc: "images/josephine_widjaja.jpg",
    },
    {
        name: "Abdullah Chandasir",
        title: "Research Assistant",
        about: " ",
        papers: "n/a",
        imageSrc: "images/abdullah_chandasir.jpg",
    },
    {
        name: "ZiYan Britt, B.S.",
        title: "Research Assistant",
        about: " ",
        papers: "n/a",
        imageSrc: "images/ziyan_britt.jpg",
    },
    {
        name: "Saniya Momin, B.S.",
        title: "Research Assistant",
        about: " ",
        papers: "n/a",
        imageSrc: "images/saniya_momin.jpg",
    },

]

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.id);
        popUp.innerHTML = 
        `
        <div class='pop-upl'>
            <img src="${people[event.target.id].imageSrc}">
        </div>
        <div class='pop-upr'>
            <h2>${people[event.target.id].name}</h2>
            <em>${people[event.target.id].title}</em>
            <p>${people[event.target.id].about}</p>
            <h4>PAPERS</h4>
            <div class='popup_papers'><p>${people[event.target.id].papers}</p></div>
            <button onClick="togglePopUp()"><img class="blackx" src="images/x.png"><img class="bluex" src="images/xblue.png"></button>
        </div>
        `;
        popUp.classList.toggle('visible');
        window.scrollTo(0, 0);
        blurry.classList.toggle('active');
    })
});

function togglePopUp() {
    popUp.classList.toggle('visible');
    blurry.classList.toggle('active');
}

const activePage = window.location.pathname;
console.log(activePage);

const navLinks = document.querySelectorAll ('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})



Fancybox.bind("[data-fancybox]", {
// Your custom options
});


//home page gallery scroll script
radiobtn = document.getElementById("radio1");
radiobtn.checked = true;
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4){
    counter=1;
  }
}, 5000);
