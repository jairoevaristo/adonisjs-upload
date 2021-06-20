import { DateTime } from 'luxon';
import {
  BaseModel,
  beforeCreate,
  beforeSave,
  column
} from '@ioc:Adonis/Lucid/Orm';
import { v4 as uuid } from 'uuid';

export default class Image extends BaseModel {
  @column({ isPrimary: true , columnName: 'image_id'})
  public id: string

  @column()
  public originalName: string

  @column()
  public size: number

  @column() 
  public name: string

  @column()
  public urlLink: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  @beforeSave()
    public static async uuidGenerated(image: Image) {
      if (!image.id) {
        image.id = uuid();
      }
    }
}
