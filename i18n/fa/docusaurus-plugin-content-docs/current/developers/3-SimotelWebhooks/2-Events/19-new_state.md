---
sidebar_position: 2
sidebar_label: "تغییر وضعیت کاربر"
title: "تغییر وضعیت کاربر"
---


# NewState

هنگامی‌ كه وضعيت کاربری در سیموتل تغییر می‌کند، رویداد NewState تولید‌ می‌شود. به‌عنوان‌ مثال کاربری که غیرفعال‌ 
  است (Idle یا در انتظار تماس)، هنگامی که تماسی برای وی ارسال شود در هنگام شنیده شدن صدای زنگ، این رویداد با 
state=Ringing ایجاد شده و به سمت وب‌سرویس ارسال می‌شود، هنگام پاسخگویی دوباره همین رویداد با state=InUse ایجاد
می‌گردد و به سمت وب‌ سرویس ارسال می‌شود.

:::caution هشدار 
تا زمانی که رویداد‌های مد نظر شما در بخش API Events انتخاب نشوند، هیچ اطلاعاتی به سمت وب‌ سرویس ارسال نمی‌شود.
:::

## پارامتر‌های رویداد

<div class="custom-table">

|                      توضیحات                     |              داده‌های تعریف‌شده              |    داده‌های نمونه   |    پارامتر‌ها    |
|:------------------------------------------------:|:------------------------------------------:|:------------------:|:---------------:|
|                    نام رویداد                    |                      -                     |      NewState      |  **event_name** |
|  شماره‌داخلی (کاربری که رویداد برای وی تولید شده)  |                      -                     |         553        |    **exten**    |
|                    وضعیت جدید                    | Idle - InUse Pause - ringing - Unavailable |        InUse       |    **state**    |
|                  طرف مقابل تماس                  |                      -                     |     09991101756    | **participant** |
|                تماس ورودی یا خروجی               |                   in-out                   |         in         |  **direction**  |
| چنانکه کاربر در صف بوده باشد، نام صف ارسال می‌گردد |                      -                     |         900        |    **queue**    |
|    شناسه یکتای تماس که توسط PBX تولید می‌گردد    |                        -                     | 1510564538.919    |  **cuid**  |
|  اپراتور در حال شماره گیری می باشد و وضعیت  state=InUse می باشد (در زمانی که اپراتور شروع به شماره گیری میکند این پارامتر مقدار میگیرد)  |   yes-no  |  yes  |  **dialer**  |

</div>

## نمونه خروجی رویداد NewState

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="InUse"
    values={[
        {label: 'Idle', value: 'Idle'},
        {label: 'InUse', value: 'InUse'},
    ]}>
<TabItem value="Idle">

```bash    
	{
	"event_name": "NewState",
	"exten": "991",
	"state": "Idle",
	"unique_id": "1610778618.378"
	}
	```

</TabItem>
<TabItem value="InUse">

```bash
	{
	"event_name": "NewState",
	"exten": "991",
	"state": "InUse",
	"participant": "992",
	"direction": "out",
	"queue": "902",
	"unique_id": "1610778625.386"
	}
```
</TabItem>
</Tabs>

