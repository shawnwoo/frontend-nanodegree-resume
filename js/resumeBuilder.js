/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Construct the bio object

var bio = {
    "name" : "Xiaopeng Wu",
    "role" : "Software Engineer",
    "contacts"  : {
        "mobile" : "650-111-1111",
        "email" : "email@aaa.bbb",
        "github" : "https://github.com/shawnwoo",
        "location" : "Palo Alto, CA"
    },
    "welcomeMessage" : "Hello World!",
    "skills" : ["programming", "testing", "frontend", "java"],
    "biopic" : "images/fry.jpg",
    "display" : function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

        var addingSkills = function(skills){
            skills.forEach(function(val){
            var formattedSkills = HTMLskills.replace("%data%", val);
            $("#header").append(formattedSkills);
        });
        };

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        $("#header").find("ul").append(formattedMobile);
        $("#header").find("ul").append(formattedEmail);
        $("#header").find("ul").append(formattedGithub);
        $("#header").find("ul").append(formattedLocation);

        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcomeMessage);
        $("#header").append(HTMLskillsStart);

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);

        addingSkills(bio.skills);


    }
};

//Construct the work object

var work = {
    "jobs" : [
        {
            "employer" : "SAP Ariba",
            "title" : "Sr Software Engineer in Test",
            "location" : "Palo Alto, CA",
            "dates" : "2013 - present",
            "description" : "Test and Automation for SAP Ariba cloud systems"
        },
        {
            "employer" : "Zuora",
            "title" : "Sr Software Engineer in Test",
            "location" : "Redwood City, CA",
            "dates" : "2010 - 2012",
            "description" : "UI and backend automation test using selenium and JUnit"

        },
        {
            "employer" : "CA Technology",
            "title" : "Sr Software Engineer in Test",
            "location" : "Beijing, China",
            "dates" : "2007 - 2010",
            "description" : "Functional and System test for CA Arcserve Backup software on differnt platforms"

        }
    ],
    "display" : function(){
        var addingWorkExperience = function (jobs){
            jobs.forEach(function(job){
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle =  HTMLworkTitle.replace("%data%", job.title);
            var formattedLocation =  HTMLworkLocation.replace("%data%", job.location);
            var formattedDate = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription =  HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedEmployer+formattedTitle);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
            });
        };

        $("#workExperience").append(HTMLworkStart);
        addingWorkExperience(work.jobs);
    }
};

//Construct the project object

var projects = {
    "projects" : [
        {
            "title" : "Udacity Portfolio Project",
            "dates" : "2016",
            "description" : "Create a portfolio page from mock design using css and HTML 5",
            "images" : ["images/project1.png", "images/project1.png"]
        }
    ],
    "display" : function(){
        var addingImageUrls = function(imageURLs){
            imageURLs.forEach(function(URL){
                var formattedImage = HTMLprojectImage.replace("%data%",URL);
                $(".project-entry:last").append(formattedImage);
            });
        };

        var constructProject = function(projects){
            projects.forEach(function(project){
                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

                $(".project-entry:last").append(formattedProjectTitle);
                $(".project-entry:last").append(formattedProjectDates);
                $(".project-entry:last").append(formattedProjectDescription);

                addingImageUrls(project.images);
            });
        };

        $("#projects").append(HTMLprojectStart);
        constructProject(projects.projects);

    }
};

var education = {
    "schools" : [
        {
            "name" : "Santa Clara University",
            "location" : "Santa Clara, CA",
            "degree" : "Master Degree",
            "majors" : ["Computer Science"],
            "dates" : "2012-2013",
            "url" : "http://www.scu.edu/"

        },
        {
            "name" : "Bei Hang University",
            "location" : "Beijing, China",
            "degree" : "Bachelor Degree",
            "majors" : ["Computer Science"],
            "dates" : "1998-2002",
            "url" : "http://ev.buaa.edu.cn/"

        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-end Engineer Nano Degree",
            "school" : "Udacity",
            "date" : "2016",
            "url" : "http://udacity.com"
        }
    ],
    "display" : function(){
        var addingMajors = function(majors){
            majors.forEach(function(major){
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
        };

        var constructSchool = function(schools){
            schools.forEach(function(school){
                var formattedSchoolNameAndDegree = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree) ;
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

                var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

                $(".education-entry:last").append(formattedSchoolNameAndDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);
                addingMajors(school.majors);

            });

        };

        var constructOnlineCourses = function(onlineCourses){
            onlineCourses.forEach(function(onlineCourse){
                var formattedOnlineTitleAndSchool = HTMLonlineTitle.replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school);
                var formattedOnlineDate = HTMLonlineDates.replace("%data%", onlineCourse.date);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);

                $(".education-entry:last").append(formattedOnlineTitleAndSchool);
                $(".education-entry:last").append(formattedOnlineDate);
                $(".education-entry:last").append(formattedOnlineURL);
            });
        };

        $("#education").append(HTMLschoolStart);
        constructSchool(education.schools);
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        constructOnlineCourses(education.onlineCourses);
    }
};


//Construct Google map part

$("#mapDiv").append(googleMap);

//Construct the whole page

bio.display();
work.display();
projects.display();
education.display();

