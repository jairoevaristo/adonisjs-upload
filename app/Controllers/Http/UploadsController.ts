import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application';
import Env from '@ioc:Adonis/Core/Env';
import { cuid } from '@ioc:Adonis/Core/Helpers';

import Image from '../../Models/Image';

export default class UploadsController {
  public async create({ request, response }: HttpContextContract) {
    const imageFile = request.file('file');

    if (!imageFile) return;

    await imageFile.move(Application.tmpPath('upload'), { 
      name: `${cuid()}-${Date.now()}.${imageFile.extname}`
    });

    const data = await Image.create({
      originalName: imageFile.clientName,
      name: imageFile.fileName,
      size: imageFile.size,
      urlLink: `upload/${imageFile.fileName}`
    });

    return response.status(200).json(data);
  }

  public async index({ response }: HttpContextContract) {
    const data = await Image.all();

    return response.status(200).json(data)
  }
}
