var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var addMoreSkillsBtn = document.getElementById('addMoreSkillsBtn');
var addMoreSkills = document.getElementById('addMoreSkills');
addMoreSkillsBtn.addEventListener('click', function (event) {
    event.preventDefault();
    addMoreSkills.classList.toggle('hidden');
});
var resumeForm = document.getElementById("resume-form");
var resumeContentElememt = document.getElementById("resume-content");
var downloadPdfButton = document.getElementById('download-copylink-btn');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var userImage = document.getElementById("userImage");
    var name = document.getElementById("name").value;
    var dateofbirth = document.getElementById("Dateofbirth").value;
    var phone = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var institude = document.getElementById("institude").value;
    var degree = document.getElementById("degree").value;
    var passing = document.getElementById("passing-year").value;
    var work = document.getElementById("work").value;
    var skill1 = document.getElementById("skills1").value;
    var skill2 = document.getElementById("skills2").value;
    var skill3 = document.getElementById("skills3").value;
    var skill4 = document.getElementById("skills4").value;
    var skill5 = document.getElementById("skills5").value;
    var skill6 = document.getElementById("skills6").value;
    // if(!name || !email || !education ||!work || ! skills){
    //     alert("PLease fill out all fields")
    // }
    if (userImage.files && userImage.files[0]) {
        // Create a URL for the uploaded image
        var uploadedImageURL = URL.createObjectURL(userImage.files[0]);
        var resumeContent = "\n<img src=\"".concat(uploadedImageURL, "\" alt=\"Profile Picture\" />\n<h1 style=\"text-align:left;\">").concat(name, "</h1>\n<h2>Personal Details</h2>\n<p><strong>Date Of Birth:</strong> ").concat(dateofbirth, "</p>\n<p><strong>Email:</strong>").concat(email, "</p>\n<p><strong>Phone Number:</strong> ").concat(phone, "</p> \n<h2>Education:</h2>\n<p><strong>Institude Name:</strong> ").concat(institude, "</p>\n<p><strong>Degree:</strong> ").concat(degree, "</p>\n<p><strong>Passing Year:</strong>").concat(passing, "</p>\n<h2>Work Experience:</h2>\n<p>").concat(work, "</p>\n<h2>Skills:</h2>\n<p>").concat(skill1, "</p>\n<p>").concat(skill2, "</p>\n<p>").concat(skill3, "</p>\n<p>").concat(skill4, "</p>\n<p>").concat(skill5, "</p>\n<p>").concat(skill6, "</p>\n");
        if (resumeContentElememt) {
            resumeContentElememt.innerHTML = resumeContent;
            resumeContentElememt.style.display = 'block';
            // resumeForm.style.display = 'none';
        }
        else {
            console.error("resume content element is missing");
        }
    }
    if (resumeContentElememt) {
        downloadPdfButton.style.display = 'inline';
    }
    else {
        downloadPdfButton.style.display = "none";
    }
    var clickbutton = document.getElementById("download-copylink-btn");
    // clickbutton.id="clickbutton";
    resumeContentElememt.appendChild(clickbutton);
    var download = document.getElementById("download-btn");
    // download.textContent="DOWNLOAD AS PDF";
    download.addEventListener("click", function () {
        resumeForm.style.display = 'none';
        downloadPdfButton.style.display = 'none';
        window.print();
    });
    clickbutton.appendChild(download);
    var shareLINK = document.getElementById("generate-link-btn");
    shareLINK.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var shareableLink, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    shareableLink = "https://yourdomain.com/resumes/".concat(name.replace(/\s+/g, "_"), "_cv.html");
                    return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                case 1:
                    _a.sent();
                    alert("LINK COPIED TO CLIPBOARD!");
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error("FAILED TO COPY LINK:", err_1);
                    alert("FAILED TO COPY LINK TO CLIPBOARD,PLEASE TRY AGAIN IN A MOMENT");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    clickbutton.appendChild(shareLINK);
});
