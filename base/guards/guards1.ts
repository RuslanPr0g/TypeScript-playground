function strip(x: string | number) {
    if(typeof x === 'number')
    {
        return x.toFixed(2);
    }

    return x.trim();
}

class MyResponse {
    header = 'response header';
    result = 'response result';
}

class MyError {
    header = 'error header';
    result = 'error result';
}

function handle(res: MyResponse | MyError) {
    if(res instanceof MyResponse)
    {
        return {
            info: res.header + res.result
        }
    }

    if(res instanceof MyError)
    {
        return {
            info: res.header + res.result
        }
    }
}

// ======================

type AlertType = 'success' | 'dander' | 'warning';

function SetAlertType(type: AlertType) {
    // ...
}

setAlertType('danger');