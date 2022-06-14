const cleanseRec = (obj) => {
    Object.keys(obj).forEach((key) => {
        // Get this value and its type
        var value = obj[key];
        var type = typeof value;
        if (type === "object" && !(value instanceof Array)) {
            // Recurse...
            cleanseRec(value);
            Object.keys(value).forEach((k) => {
                var newKey = `${key}.${k}`;
                obj[newKey] = value[k];
            })
            delete obj[key];
        }
        else if (type === "undefined") {
            delete obj[key];
        }
        else {
            switch(key) {
                case 'firstName' : obj[key] = { $regex: new RegExp(value), $options: 'i'};
                                break;
                case 'lastName': obj[key] = { $regex: new RegExp(value), $options: 'i'};
                                break;
                case 'followUpDate': obj[key] = value;
                                break;
                case 'pipeline': obj[key] = value;
                                break;
                case 'phone': obj[key] = value;
                                break;
                case 'email': obj[key] = { $regex: new RegExp(value), $options: 'i'};
                                break;
                case 'dealStage': obj[key] = Array.isArray(obj[key]) ? { $in: value} : value;
                                break;
            }

        }
    });
}

const cleanse = (untransformedObj) => {
    var obj = {...untransformedObj};

    cleanseRec(obj);

    return obj;
};



module.exports = {
    cleanse
};