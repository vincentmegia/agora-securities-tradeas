﻿using System.Collections.Generic;
using System.Linq;
using log4net;
using MyCouch.Requests;
using Newtonsoft.Json;
using Tradeas.Models;

namespace Tradeas.Repositories
{
    public class ImportTrackerRepository : Repository, IImportTrackerRepository
    {
        private static readonly ILog Logger = LogManager.GetLogger(typeof(BrokerTransactionRepository));

        public ImportTrackerRepository(string serverAddress) : base(serverAddress, "imports-tracker")
        {
        }


        /// <summary>
        /// Bulks the async.
        /// </summary>
        /// <returns>The async.</returns>
        /// <param name="importTracker">Ideas json.</param>
        public TaskResult PostAsync(ImportTracker importTracker)
        {
            Logger.Info($"adding imported broker transaction tracker: {importTracker}");
            var response = Entities.PostAsync(importTracker);
            Logger.Info($"operaton status code: {response.Result.StatusCode}");
            return new TaskResult {IsSuccessful = response.Result.IsSuccess};
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="importTracker"></param>
        /// <returns></returns>
        public TaskResult DeleteAsync(ImportTracker importTracker)
        {
            Logger.Info($"deleting import tracker data: {importTracker}");
            var response = Entities.DeleteAsync(importTracker);
            Logger.Info($"operaton status code: {response.Result.StatusCode}");
            return new TaskResult {IsSuccessful = response.Result.IsSuccess};
        }

        /// <summary>
        /// Bulks the async.
        /// </summary>
        /// <returns>The async.</returns>
        public TaskResult GetAll()
        {
            var queryViewRequest = new QueryViewRequest("query", "all")
                .Configure(c => c.IncludeDocs(true));
            var response = Views.QueryAsync<ImportTracker>(queryViewRequest);

            if (response.Result.RowCount == 0)
            {
                var taskResult = new TaskResult {IsSuccessful = false};
                taskResult.SetData(new List<ImportTracker>());
                return taskResult;
            }


            var importTrackers = response
                .Result
                .Rows
                .Select(row =>
                    (ImportTracker) JsonConvert.DeserializeObject(row.IncludedDoc,
                        typeof(ImportTracker))) // iad to resort to this, freakin framework works finicky
                .ToList();

            var result = new TaskResult
            {
                IsSuccessful = true,
                Messages = new List<string>
                {
                    response.Result.Error,
                    response.Result.Reason
                }
            };
            result.SetData(importTrackers);
            return result;
        }
    }
}