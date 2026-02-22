document.getElementById('all-list').addEventListener('click',function(){
        const noJobs= document.getElementById('no-jobs');
        const allJobs= document.getElementById('all-jobs');
        noJobs.classList.add("hidden");
        allJobs.classList.remove("hidden");


});

document.getElementById('interview').addEventListener('click',function(){
        const allJobs= document.getElementById('all-jobs');
        const noJobs= document.getElementById('no-jobs');
        allJobs.classList.add("hidden");
        noJobs.classList.remove("hidden");

});

document.getElementById('rejected').addEventListener('click',function(){
        const allJobs= document.getElementById('all-jobs');
        const noJobs= document.getElementById('no-jobs');
        allJobs.classList.add("hidden");
        noJobs.classList.remove("hidden");

});

document.getElementById('interview-click').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click');
        const jobStatus= document.getElementById('status');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");
});

document.getElementById('reject-click').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click');
        const jobStatus= document.getElementById('status');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");
});


