/////////////////////////////////////////////////////////////
//
// pgAdmin 4 - PostgreSQL Tools
//
// Copyright (C) 2013 - 2022, The pgAdmin Development Team
// This software is released under the PostgreSQL Licence
//
//////////////////////////////////////////////////////////////

import gettext from 'sources/gettext';
import BaseUISchema from 'sources/SchemaView/base_schema.ui';

export default class ActiveQuery extends BaseUISchema {
  constructor(initValues) {
    super({
      ...initValues,
    });

  }
  
  get baseFields() {
    return [

      {
        id: 'backend_type',
        label: gettext('Backend type'),
        type: 'text',
        editable: true,
        noEmpty: true,
        readonly: true,
        mode: ['properties'],
        group: gettext('Details'),
        disabled: true
      },
      {
        id: 'query_start',
        label: gettext('Query started at'),
        type: 'text',
        editable: false,
        readonly: true,
        group: gettext('Details'),
        disabled: true

      },
      {
        id: 'state_change',
        label: gettext('Last state changed at'),
        type: 'text',
        editable: false,
        readonly: true,
        group: gettext('Details'),
        disabled: true
      },
      {
        id: 'query',
        label: gettext('SQL'),
        cell: 'string',
        editable: false,
        readonly: true,
        type: 'sql',
        group: gettext('Details'),
      },
    ];

  }

}