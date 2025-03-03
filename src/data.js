export const Data = {
    "nyucad": {
        "input" : process.env.PUBLIC_URL + '/ply/nyucad/input.ply',
        "gt" : process.env.PUBLIC_URL + '/ply/nyucad/res-240-gt.ply',
        "240" : process.env.PUBLIC_URL + '/ply/nyucad/res-240-pred.ply',
        "120" : process.env.PUBLIC_URL + '/ply/nyucad/res-120-pred.ply',
        "60" : process.env.PUBLIC_URL + '/ply/nyucad/res-60-pred.ply',
        "30" : process.env.PUBLIC_URL + '/ply/nyucad/res-30-pred.ply',
        "psinput":1.5,
        "ps240": 1.5,
        "ps120": 2,
        "ps60": 5,
        "ps30": 10
    },
    "s3dis": {
        "input" : process.env.PUBLIC_URL + '/ply/s3dis/input.ply',
        "gt" : process.env.PUBLIC_URL + '/ply/s3dis/input_gt.ply',
        "240" : process.env.PUBLIC_URL + '/ply/s3dis/res-240-pred.ply',
        "120" : process.env.PUBLIC_URL + '/ply/s3dis/res-120-pred.ply',
        "60" : process.env.PUBLIC_URL + '/ply/s3dis/res-60-pred.ply',
        "30" : process.env.PUBLIC_URL + '/ply/s3dis/res-30-pred.ply',
        "psinput":0.05,
        "ps240": 1.3,
        "ps120": 2,
        "ps60": 4,
        "ps30": 8
    },
    "semantic3d": {
        "input" : process.env.PUBLIC_URL + '/ply/semantic3d/input.ply',
        "gt" : process.env.PUBLIC_URL + '/ply/semantic3d/input_gt.ply',
        "240" : process.env.PUBLIC_URL + '/ply/semantic3d/res-240-pred.ply',
        "120" : process.env.PUBLIC_URL + '/ply/semantic3d/res-120-pred.ply',
        "60" : process.env.PUBLIC_URL + '/ply/semantic3d/res-60-pred.ply',
        "30" : process.env.PUBLIC_URL + '/ply/semantic3d/res-30-pred.ply',
        "psinput":0.05,
        "ps240": 1.5,
        "ps120": 2,
        "ps60": 5,
        "ps30": 10
    },
    "rockery": {
        "input" : process.env.PUBLIC_URL + '/ply/rockery/input.ply',
        "gt" : process.env.PUBLIC_URL + '/ply/rockery/input_gt.ply',
        "240" : process.env.PUBLIC_URL + '/ply/rockery/res-240-pred.ply',
        //"240" : process.env.PUBLIC_URL + 'http://114.212.87.191:2025/exp/arbitrary/semantic3d/sg27_station4_intensity_rgb/1.50000.ply',
        "120" : process.env.PUBLIC_URL + '/ply/rockery/res-120-pred.ply',
        "60" : process.env.PUBLIC_URL + '/ply/rockery/res-60-pred.ply',
        "30" : process.env.PUBLIC_URL + '/ply/rockery/res-30-pred.ply',
        "psinput":0.05,
        "ps240": 1.5,
        "ps120": 2,
        "ps60": 5,
        "ps30": 10
    }
}