enum Membership {
    Simple,
    Standard,
    Premium
};

const membership = Membership.Standard;

const membershipReversed = Membership[1];

console.log(membership);
console.log(membershipReversed);

// ============

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = "Facebook",
    INSTAGRAM = 'Instagram'
};

const social = SocialMedia.INSTAGRAM;
console.log(social);