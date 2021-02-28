export default (data, sort) => {
    switch (sort) {
        case 'id':
            return data.sort((a, b) => {
                if (a.id > b.id) {
                    return -1;
                } else if (a.id < b.id) {
                    return 1;
                }
                return 0;
            });
        case 'firstName':
            return data.sort((a, b) => {
                if (a.firstName > b.firstName) {
                    return -1;
                } else if (a.firstName < b.firstName) {
                    return 1;
                }
                return 0;
            });
        case 'lastName':
            return data.sort((a, b) => {
                if (a.lastName > b.lastName) {
                    return -1;
                } else if (a.lastName < b.lastName) {
                    return 1;
                }
                return 0;
            });
        case 'email':
            return data.sort((a, b) => {
                if (a.email > b.email) {
                    return -1;
                } else if (a.email < b.email) {
                    return 1;
                }
                return 0;
            });
        case 'phone':
            return data.sort((a, b) => {
                if (a.phone > b.phone) {
                    return -1;
                } else if (a.phone < b.phone) {
                    return 1;
                }
                return 0;
            });
        default:
            return 0;
    }
};