module.exports={

    docs: {
	   

        'مرکز‌تماس': [
        
          {
               type: 'category',
                label: 'Simotel API',
                items: [
                       'callcenter_api/SimoTelAPI/settings',
                       'callcenter_api/SimoTelAPI/call-originate',
                       {
                        'کاربر': ['callcenter_api/SimoTelAPI/users/users_add',
                                  'callcenter_api/SimoTelAPI/users/users_search',
                                  'callcenter_api/SimoTelAPI/users/users_edit',
                                  'callcenter_api/SimoTelAPI/users/users_remove',
                                ],
                        'ترانک': ['callcenter_api/SimoTelAPI/trunks/trunks_add',
                                  'callcenter_api/SimoTelAPI/trunks/trunks_search',
                                  'callcenter_api/SimoTelAPI/trunks/trunks_edit',
                                  'callcenter_api/SimoTelAPI/trunks/trunks_remove',
                                ],
                        'صف': ['callcenter_api/SimoTelAPI/queues/queues_add',
                               'callcenter_api/SimoTelAPI/queues/queues_search',
                               'callcenter_api/SimoTelAPI/queues/queues_edit',
                               'callcenter_api/SimoTelAPI/queues/queues_remove',
                               'callcenter_api/SimoTelAPI/queues/queue_addagent',
                               'callcenter_api/SimoTelAPI/queues/queue_pauseagent',
                               'callcenter_api/SimoTelAPI/queues/queue_resumagent',
                               'callcenter_api/SimoTelAPI/queues/queue_removeagent',
                               'callcenter_api/SimoTelAPI/queues/queue_batchaddagent',
                               'callcenter_api/SimoTelAPI/queues/queue_batchpauseagent',
                               'callcenter_api/SimoTelAPI/queues/queue_batchresumagent',
                               'callcenter_api/SimoTelAPI/queues/queue_batchremoveagent',
                              ],
                        'موزیک انتظار': [
                               'callcenter_api/SimoTelAPI/musiconhold/musiconhold_search'
                              ],
                        'آوا': ['callcenter_api/SimoTelAPI/announcement/announcements_upload',
                                'callcenter_api/SimoTelAPI/announcement/announcements_add',
                                'callcenter_api/SimoTelAPI/announcement/announcements_search',
                                'callcenter_api/SimoTelAPI/announcement/announcements_edit',
                                'callcenter_api/SimoTelAPI/announcement/announcements_remove',
                              ],
                        'صندوق‌صوتی': ['callcenter_api/SimoTelAPI/voicemail/voicemail_add',
                                      'callcenter_api/SimoTelAPI/voicemail/voicemail_search',
                                      'callcenter_api/SimoTelAPI/voicemail/voicemail_edit',
                                      'callcenter_api/SimoTelAPI/voicemail/voicemail_remove',
                                      'callcenter_api/SimoTelAPI/voicemail/inbox_search',
                                      'callcenter_api/SimoTelAPI/voicemail/inbox_download',
                                    ],
                        'لیست‌سیاه': ['callcenter_api/SimoTelAPI/blacklist/blacklist_add',
                                     'callcenter_api/SimoTelAPI/blacklist/blacklist_search',
                                     'callcenter_api/SimoTelAPI/blacklist/blacklist_edit',
                                     'callcenter_api/SimoTelAPI/blacklist/blacklist_remove',
                                    ],
                        'لیست‌سفید': [
                                    'callcenter_api/SimoTelAPI/whitelist/whitelist_add',
                                    'callcenter_api/SimoTelAPI/whitelist/whitelist_search',
                                    'callcenter_api/SimoTelAPI/whitelist/whitelist_edit',
                                    'callcenter_api/SimoTelAPI/whitelist/whitelist_remove',
                                  ],
                                    'فکس': [
                                    'callcenter_api/SimoTelAPI/fax/fax_upload',
                                    'callcenter_api/SimoTelAPI/fax/fax_add',
                                    'callcenter_api/SimoTelAPI/fax/fax_search',
                                    'callcenter_api/SimoTelAPI/fax/fax_download',
                                  ],
                        'گزارشات': [
                                    'callcenter_api/SimoTelAPI/report/quick_search',
                                    'callcenter_api/SimoTelAPI/report/quick_info',
                                    'callcenter_api/SimoTelAPI/report/audio_download',
                                    'callcenter_api/SimoTelAPI/report/report_cdr_search',
                                    'callcenter_api/SimoTelAPI/report/report_cdr_ordered_id',
                                    'callcenter_api/SimoTelAPI/report/queue_search',
                                    'callcenter_api/SimoTelAPI/report/queue_search_ordered_id',
                                    'callcenter_api/SimoTelAPI/report/queue_details_search',
                                    'callcenter_api/SimoTelAPI/report/queue_details_ordered_id',
                                    'callcenter_api/SimoTelAPI/report/agent_search',
                                    'callcenter_api/SimoTelAPI/report/report_poll',
                                  ],
                       }
                ],
          },
          {
               type: 'category',
                label: 'کامپوننت‌های API',
                items: [
                        'callcenter_api/APIComponents/setting',
                        'callcenter_api/APIComponents/exten_api',
                        'callcenter_api/APIComponents/trunk_api',
                        'callcenter_api/APIComponents/ivr_api',
                        'callcenter_api/APIComponents/smart_api',
                      ],
          },
          {
               type: 'category',
                label: 'مثال‌های کاربردی',
                items: [
                      'callcenter_api/Scenarios/smart_api',
                      'callcenter_api/Scenarios/exten_api',
                      'callcenter_api/Scenarios/call_originate',
                    ],
          },
    
      ],
      
    /////////////////////////////////// API SimoTel Sidebar//////////////////////////////////
    
    
    
    
      
    /////////////////////////////////// API AutoDialer Sidebar//////////////////////////////////
      'ماژول تماس‌انبوه': [
                      'autodialer_api/introautodialer',
        {
          'مخاطبین': [
                      'autodialer_api/contact/contact_add',
                      'autodialer_api/contact/contact_search',
                      'autodialer_api/contact/contact_edit',
                      'autodialer_api/contact/contact_delete',
                    ],
          'گروه‌ها': [
                      'autodialer_api/group/group_upload',
                      'autodialer_api/group/group_add',
                      'autodialer_api/group/group_search',
                      'autodialer_api/group/group_edit',
                      'autodialer_api/group/group_delete',
                    ],
          'کمپین': [
                      'autodialer_api/campaign/campaign_add',
                      'autodialer_api/campaign/campaign_search',
                      'autodialer_api/campaign/campaign_edit',
                      'autodialer_api/campaign/campaign_delete',
                    ],
          'آواها': [
                      'autodialer_api/announcement/announcement_upload',
                      'autodialer_api/announcement/announcement_add',
                      'autodialer_api/announcement/announcement_search',
                      'autodialer_api/announcement/announcement_edit',
                      'autodialer_api/announcement/announcement_delete',
                    ],
          'ترانک': [
                      'autodialer_api/trunk_manager/trunk_manager_search',
                      'autodialer_api/trunk_manager/trunk_manager_edit',
                    ],
          'گزارشات': [
                      'autodialer_api/report/report_search',
                      'autodialer_api/report/report_search_ordered',
                      'autodialer_api/report/report_info',
                    ],
        },
                'autodialer_api/example',
                'autodialer_api/call_originate',
                
      ],
      }
    /////////////////////////////////// API  AutoDialer Sidebar//////////////////////////////////
};