import ucNew from '../../dist/uploadcare.api'
import ucOld from 'https://ucarecdn.com/libs/widget/3.7.9/uploadcare.api.js'

import { compare } from './isKeyOkey'

compare(ucOld, ucNew, 'uploadcare.api.js')
