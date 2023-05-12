export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      name: 'meta_title',
      title: 'Meta title',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
      group: 'meta',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: {required: () => any}) => Rule.required(),
      group: 'content',
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published date',
      validation: (Rule: {required: () => any}) => Rule.required(),
      group: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: {required: () => any}) => Rule.required(),
      options: {hotspot: true},
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
      group: 'content',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slyg',
      validation: (Rule: {required: () => any}) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      group: 'content',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      validation: (Rule: {required: () => any}) => Rule.required(),
      of: [{type: 'block'}, {type: 'image'}],
    },
  ],
}
