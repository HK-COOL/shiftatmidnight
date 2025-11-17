import { formatDate, formatDistance, parseISO } from "date-fns";
import { cn } from "@/lib/utils"; 
import React from 'react'; // 确保导入 React
import { useTranslations } from 'next-intl';

type ChangelogItem = {
  version?: string;
  title?: string;
  date: string;
  added?: string[];
  improved?: string[];
  fixed?: string[];
  knownIssues?: string[];
  // 兼容旧格式
  changes?: string[];
};

export function ChangelogSection({ items, className }: { items: ChangelogItem[], className?: string }) {
  const t = useTranslations('changelog');
  
  return (
    <section id="更新日志" className={cn(className)}>
      <div className="w-full text-left space-y-8">
        {items?.map((item, i) => (
          <div key={i} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
            {/* 版本号和标题 */}
            <div className="mb-4">
              {item.version && (
                <h3 className="text-2xl font-bold mb-1">
                  {item.version}
                  {item.title && <span className="text-lg font-normal text-gray-600 dark:text-gray-400 ml-2">– {item.title}</span>}
                </h3>
              )}
              <p
                className="text-sm opacity-60"
                title={formatDate(parseISO(item.date), "yyyy-MM-dd")}
              >
                {formatDate(parseISO(item.date), "yyyy-MM-dd")} ({formatDistance(parseISO(item.date), new Date(), {
                  addSuffix: true,
                })})
              </p>
            </div>

            {/* 新格式：分类显示 */}
            {item.added || item.improved || item.fixed || item.knownIssues ? (
              <div className="space-y-4">
                {item.added && item.added.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">{t('added')}</h4>
                    <ul className="list-disc space-y-1 pl-6 text-sm">
                      {item.added.map((change, j) => (
                        <li key={j} className="text-gray-700 dark:text-gray-300">{change}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.improved && item.improved.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{t('improved')}</h4>
                    <ul className="list-disc space-y-1 pl-6 text-sm">
                      {item.improved.map((change, j) => (
                        <li key={j} className="text-gray-700 dark:text-gray-300">{change}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.fixed && item.fixed.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">{t('fixed')}</h4>
                    <ul className="list-disc space-y-1 pl-6 text-sm">
                      {item.fixed.map((change, j) => (
                        <li key={j} className="text-gray-700 dark:text-gray-300">{change}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.knownIssues && item.knownIssues.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">{t('knownIssues')}</h4>
                    <ul className="list-disc space-y-1 pl-6 text-sm">
                      {item.knownIssues.map((change, j) => (
                        <li key={j} className="text-gray-700 dark:text-gray-300">{change}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              /* 兼容旧格式 */
              item.changes && (
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  {item.changes.map((change, j) => (
                    <li key={j}>{change}</li>
                  ))}
                </ul>
              )
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
