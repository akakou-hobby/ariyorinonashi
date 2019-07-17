function toStr() {
    const _in = document.getElementById('to_str_input')
    const _out = document.getElementById('to_str_output')
    
    score = parseFloat(_in.value)
    _out.innerHTML = ''

    var max = 100
    var min = 0
    var res = ''

    for (let index = 0; index < 100; index++) {
        var mid = (max + min) / 2
        
        if (mid == score) break;
        else if (score > mid) {
            min = mid
            
            if (index == 0) {
                res = 'あり'
            }
            else {
                _out.innerHTML += 'ありよりの'
            }
        }
        else {
            max = mid
            
            if (index == 0) {
                res = 'なし'
            }
            else {
                _out.innerHTML += 'なしよりの'
            }
        }
    }

    _out.innerHTML += res
}

function toScore() {
    const _in = document.getElementById('to_score_input')
    const _out = document.getElementById('to_score_output')
    
    var str = _in.value
    var score = 0

    var res = str.slice(-2)
    var str = str.slice(0, -2)
    
    if (res == 'あり') {
        score = 75
    }
    else {
        score = 25
    }

    for (let index = 2; index < 100; index++) {
        var width = 50 / (2 ** index)

        if(str.length == 0) break
        else {
            tmp = str.slice(0, 5)
            str = str.slice(5)

            if (tmp == 'ありよりの') {
                score += width
            }
            else {
                score -= width
            }

        }
    }

    _out.innerText = score
}
