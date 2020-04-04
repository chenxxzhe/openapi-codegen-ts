import {OpenAPIV3} from 'openapi-types'

import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'

export interface GeneratorConfig {
  spec: string | OpenAPIV3.Document
  dist: string
}

export default function generator(config: GeneratorConfig): void {
  const spec: OpenAPIV3.Document = typeof config.spec === 'string'
    ? config.spec.match(/\.yml$/)
      ? yaml.safeLoad(fs.readFileSync(config.spec, 'utf8'))
      : require(config.spec)
    : config.spec

  if (!spec.openapi.match(/^3/)) {
    throw new Error('Only support openapi v3')
  }
  
  const distRoot = path.resolve(config.dist)
  
  generateModel()
  generateApiService()

}

function generateModel() {
  
}

function generateApiService() {
  
}

