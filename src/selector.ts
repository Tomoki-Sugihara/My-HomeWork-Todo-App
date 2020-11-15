import { createSelector } from "@reduxjs/toolkit"
import { DefaultRootState } from "react-redux"

const configSelector = (state: DefaultRootState) => state.config

export const getActiveIndex = createSelector([configSelector], state => state.activeIndex)