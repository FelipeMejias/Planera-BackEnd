import joi from 'joi'
import { ChangeHabitData, HabitData } from '../services/habitService'

const regex=/^([0-9]{2},[0-9]{2}|[0-9]{2}:[0-9]{2}|[0-9]{1},[0-9]{2}|[0-9]{1}:[0-9]{2}|[0-9]{2}|[0-9]{1})$/

export const postSchema=joi.object<HabitData>({
    title:joi.string().required(),
    day:joi.number().required(),
    begin:joi.string().pattern(regex).required(),
    end:joi.string().pattern(regex).required()
})

export const putSchema=joi.object<ChangeHabitData>({
    title:joi.string(),
    day :joi.number(),
    begin:joi.string().pattern(regex),
    end:joi.string().pattern(regex),
    color:joi.string().pattern(/^(red|yellow|blue|green|purple)$/)
})