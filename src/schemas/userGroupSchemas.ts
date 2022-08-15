import joi from 'joi'

export const postSchema=joi.object({
    guest:joi.string().required()
})

export const putSchema=joi.object({
    color:joi.string().regex(/^(orange|pink|aqua)$/).required()
})