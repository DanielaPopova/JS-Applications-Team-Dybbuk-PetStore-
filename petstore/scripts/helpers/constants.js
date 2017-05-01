const BREED_FEATURE_MIN_LEVEL = 1;
const BREED_FEATURE_MAX_LEVEL = 5;
const DOG_MIN_SIZE = 1;
const DOG_MAX_SIZE = 4;

const DOG_AVAILABLE_SIZE = ['small', 'medium', 'large', 'giant'];

const DOG_AGE_CATEGORIES = ['puppy', 'adult', 'senior'];
const CAT_AGE_CATEGORIES = ['kitten', 'adult', 'senior'];

const DOG_FOOD_AVAILABLE_AMOUNTS = [0.2, 0.5, 2.0, 5.0];
const CAT_FOOD_AVAILABLE_AMOUNTS = [0.1, 0.25, 1.5, 4.0];

const BREED_NAME_MIN_LENGTH = 2;
const BREED_NAME_MAX_LENGTH = 30;
const DESCRIPTION_MIN_LENGTH = 10;
const DESCRIPTION_MAX_LENGTH = 400;

let constants = {
    BREED_FEATURE_MIN_LEVEL,
    BREED_FEATURE_MAX_LEVEL,
    DOG_MIN_SIZE,
    DOG_MAX_SIZE,
    DOG_AVAILABLE_SIZE,
    DOG_AGE_CATEGORIES,
    CAT_AGE_CATEGORIES,
    DOG_FOOD_AVAILABLE_AMOUNTS,
    CAT_FOOD_AVAILABLE_AMOUNTS,
    BREED_NAME_MIN_LENGTH,
    BREED_NAME_MAX_LENGTH,
    DESCRIPTION_MIN_LENGTH,
    DESCRIPTION_MAX_LENGTH
};

export { constants as CONSTANTS };
