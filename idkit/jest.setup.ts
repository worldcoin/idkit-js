import React from 'react'
import { TextEncoder } from 'util'
import '@testing-library/jest-dom'

global.TextEncoder = TextEncoder

// NOTE: Add global react to avoid "ReferenceError: React is not defined" error
global.React = React
