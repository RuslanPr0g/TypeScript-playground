var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
;
var membership = Membership.Standard;
var membershipReversed = Membership[1];
console.log(membership);
console.log(membershipReversed);
// ============
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "Facebook";
    SocialMedia["INSTAGRAM"] = "Instagram";
})(SocialMedia || (SocialMedia = {}));
;
var social = SocialMedia.INSTAGRAM;
console.log(social);
